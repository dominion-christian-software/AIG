"use client";

import { useState } from "react";
import type { Chat, ChatMessage } from "@/types/api";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import ChatHistory from "./ChatHistory";

interface ChatWindowProps {
  messages: ChatMessage[];
  streamingContent: string;
  isStreaming: boolean;
  isIncognito: boolean;
  activeChatId: string | null;
  chats: Chat[];
  chatsLoading: boolean;
  showHistory: boolean;
  onSend: (content: string) => void;
  onSelectChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  onNewChat: () => void;
  onNewIncognito: () => void;
  onToggleHistory: () => void;
}

export default function ChatWindow({
  messages,
  streamingContent,
  isStreaming,
  isIncognito,
  activeChatId,
  chats,
  chatsLoading,
  showHistory,
  onSend,
  onSelectChat,
  onDeleteChat,
  onNewChat,
  onNewIncognito,
  onToggleHistory,
}: ChatWindowProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden
        rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-200 animate-in fade-in slide-in-from-bottom-4
        duration-300 transition-all ${
          expanded
            ? "w-[600px] h-[700px]"
            : "w-[380px] h-[520px]"
        }`}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: "linear-gradient(135deg, #00546B 0%, #007a9a 50%, #00546B 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleHistory}
            aria-label="Toggle chat history"
            className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <div>
            <h2 className="text-sm font-semibold text-white">
              {isIncognito ? "Incognito Chat" : "AiG Chat"}
            </h2>
            {isIncognito && (
              <p className="text-[10px] text-white/60">Messages won&apos;t be saved</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          {/* Expand / Collapse */}
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Collapse chat" : "Expand chat"}
            className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            {expanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9L4 4m0 0v4m0-4h4m6 6l5 5m0 0v-4m0 4h-4" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
              </svg>
            )}
          </button>
          {!isIncognito && (
            <button
              onClick={onNewChat}
              aria-label="New chat"
              className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col overflow-hidden">
        {showHistory && (
          <ChatHistory
            chats={chats}
            activeChatId={activeChatId}
            onSelectChat={onSelectChat}
            onDeleteChat={onDeleteChat}
            onNewChat={onNewChat}
            onNewIncognito={onNewIncognito}
            onClose={onToggleHistory}
            loading={chatsLoading}
          />
        )}
        <MessageList
          messages={messages}
          streamingContent={streamingContent}
          isStreaming={isStreaming}
        />
      </div>

      {/* Input */}
      <MessageInput onSend={onSend} disabled={isStreaming} />

      {/* Powered by */}
      <div className="bg-white border-t border-zinc-100 px-4 py-1.5 text-center">
        <span className="text-[10px] text-zinc-400">
          powered by{" "}
          <a
            href="https://dominion.chat"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#00546B] hover:text-[#007a9a] transition-colors"
          >
            Dominion
          </a>
        </span>
      </div>
    </div>
  );
}
