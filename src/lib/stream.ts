import type { StreamChunk } from "@/types/api";

/**
 * Parse a server-sent events (SSE) stream from a fetch Response into
 * an async iterable of StreamChunk objects.
 */
export async function* parseSSEStream(
  response: Response,
): AsyncGenerator<StreamChunk> {
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Response body is not readable");
  }

  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      // Keep the last partial line in the buffer
      buffer = lines.pop() ?? "";

      let currentEvent: string | undefined;
      let currentData = "";

      for (const line of lines) {
        if (line.startsWith("event:")) {
          currentEvent = line.slice(6).trim();
        } else if (line.startsWith("data:")) {
          currentData += (currentData ? "\n" : "") + line.slice(5).trim();
        } else if (line === "") {
          // Empty line = end of SSE message
          if (currentData) {
            yield { event: currentEvent, data: currentData };
          }
          currentEvent = undefined;
          currentData = "";
        }
      }
    }

    // Flush any remaining data
    if (buffer.trim()) {
      const remaining = buffer.trim();
      if (remaining.startsWith("data:")) {
        yield { data: remaining.slice(5).trim() };
      }
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * Convenience: yield just the text content from an SSE stream,
 * parsing each data chunk as JSON and extracting .content or .data fields.
 */
export async function* streamTextContent(
  response: Response,
): AsyncGenerator<string> {
  for await (const chunk of parseSSEStream(response)) {
    if (chunk.data === "[DONE]") return;

    try {
      const parsed = JSON.parse(chunk.data);
      const text = parsed.content ?? parsed.data ?? parsed.text;
      if (typeof text === "string" && text.length > 0) {
        yield text;
      }
    } catch {
      // Not JSON — yield raw data if non-empty
      if (chunk.data.length > 0) {
        yield chunk.data;
      }
    }
  }
}
