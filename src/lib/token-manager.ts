import { config, getDominionBaseUrl } from "./config";
import type { TokenRequest, TokenResponse } from "@/types/api";

const TOKEN_REFRESH_BUFFER_MS = 60_000; // refresh 60s before expiry
const DEFAULT_TOKEN_LIFETIME_MS = 3_600_000; // assume 1hr if server doesn't say

interface TokenState {
  accessToken: string;
  expiresAt: number;
}

let tokenState: TokenState | null = null;
let refreshPromise: Promise<TokenState> | null = null;

async function fetchToken(): Promise<TokenState> {
  const baseUrl = getDominionBaseUrl();
  const body: TokenRequest = {
    apiKey: config.dominion.apiKey,
    clientSecret: config.dominion.clientSecret,
    grantType: "client_credentials",
  };

  const res = await fetch(`${baseUrl}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(
      `Token request failed: ${res.status} ${res.statusText}`,
    );
  }

  const json: TokenResponse = await res.json();
  const lifetimeMs = json.data.expiresIn
    ? json.data.expiresIn * 1000
    : DEFAULT_TOKEN_LIFETIME_MS;

  return {
    accessToken: json.data.accessToken,
    expiresAt: Date.now() + lifetimeMs,
  };
}

function isExpired(state: TokenState): boolean {
  return Date.now() >= state.expiresAt - TOKEN_REFRESH_BUFFER_MS;
}

/**
 * Returns a valid access token, refreshing automatically if expired.
 * Concurrent calls share the same in-flight refresh to avoid duplicate requests.
 */
export async function getAccessToken(): Promise<string> {
  if (tokenState && !isExpired(tokenState)) {
    return tokenState.accessToken;
  }

  // Deduplicate concurrent refresh calls
  if (!refreshPromise) {
    refreshPromise = fetchToken().finally(() => {
      refreshPromise = null;
    });
  }

  tokenState = await refreshPromise;
  return tokenState.accessToken;
}

/**
 * Force-clear the cached token, causing the next getAccessToken() call to re-fetch.
 */
export function clearToken(): void {
  tokenState = null;
  refreshPromise = null;
}
