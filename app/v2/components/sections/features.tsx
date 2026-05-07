import { Box, GitBranch, Database, Puzzle, Shuffle, Shield } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Container Isolation",
    description: "Every agent runs in its own isolated container. No cross-contamination, no shared state, full security.",
  },
  {
    icon: GitBranch,
    title: "Orchestration Engine",
    description: "Coordinate multi-agent workflows with structured handoffs, dependency graphs.",
  },
  {
    icon: Database,
    title: "Scoped Memory",
    description: "Agents maintain context within defined boundaries. Session memory, persistent memory, shared memory.",
  },
  {
    icon: Puzzle,
    title: "Pluggable Skills",
    description: "Extend agent capabilities with skills. File operations, API calls, code execution, and custom actions.",
  },
  {
    icon: Shuffle,
    title: "Multi-Provider LLM",
    description: "Anthropic, OpenAI, and more. Switch providers without changing agent logic. No vendor lock-in.",
  },
  {
    icon: Shield,
    title: "RBAC & Audit Logs",
    description: "Role-based access control and comprehensive audit trails. Know who did what and when.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for Production
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Everything you need to run AI agents reliably at scale.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-150 hover:border-[var(--color-brand)]/50 hover:scale-[1.02]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-[var(--color-brand)]/10 p-2.5 text-[var(--color-brand)]">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
