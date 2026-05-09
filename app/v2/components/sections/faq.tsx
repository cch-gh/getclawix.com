"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Clawix?",
    answer:
      "Clawix is an open-source, self-hosted multi-agent AI orchestration platform designed for secure AI workflow execution, governance, memory management, and scalable agent collaboration inside isolated Docker containers.",
  },
  {
    question: "Who is Clawix built for?",
    answer:
      "AI consultants building enterprise AI workflows, AI enthusiasts experimenting with autonomous agents, junior developers learning AI orchestration and infrastructure, and organizations requiring private and governable AI systems.",
  },
  {
    question: "What makes Clawix different from other AI agent frameworks?",
    answer:
      "Clawix focuses on production-grade orchestration with container-isolated agents, self-hosted deployment, governance and auditability, multi-agent collaboration, multi-provider AI support, persistent memory and workspaces, and role-based access control.",
  },
  {
    question: "Is Clawix open source?",
    answer:
      "Yes. Clawix is publicly available as an open-source project under the MIT license.",
  },
  {
    question: "Which AI providers are supported?",
    answer:
      "Available providers include Anthropic Claude, OpenAI GPT, Z.AI Coding, Kimi and OpenAI-compatible APIs. Planned providers include Gemini, DeepSeek, Azure OpenAI, and OpenRouter.",
  },
  {
    question: "Can I use local LLMs with Clawix?",
    answer:
      "Yes. Clawix supports OpenAI-compatible endpoints such as Ollama, vLLM, and self-hosted inference APIs.",
  },
  {
    question: "Does Clawix require Docker?",
    answer:
      "Yes. Docker is required because every AI agent runs inside its own isolated container for security, sandboxing, and resource management.",
  },
  {
    question: "How do I install Clawix?",
    answer:
      "Clone the repository, start Docker Desktop, and run: pnpm run install:clawix. The installer automatically configures environment variables, builds Docker images, and starts required services.",
  },
  {
    question: "How are API keys and secrets protected?",
    answer:
      "Provider API keys and secrets are encrypted using AES-256-GCM encryption and stored securely on the server.",
  },
  {
    question: "What governance features does Clawix provide?",
    answer:
      "Governance features include audit logs, token budgets, structured logging, Prometheus metrics, scoped memory controls, and role-based access control (RBAC).",
  },
  {
    question: "What is the scoped memory system?",
    answer:
      "Clawix supports private memory, group memory, and organization-wide memory. This enables AI agents to retain contextual knowledge across workflows and teams.",
  },
  {
    question: "What features are planned for the future?",
    answer:
      "Planned roadmap items include WhatsApp integration, Slack integration, skill marketplace, advanced token analytics, multi-region deployment, and additional AI provider integrations.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="text-[var(--color-text-secondary)]">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Everything you need to know about Clawix.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
