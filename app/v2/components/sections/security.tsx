import { Container, KeyRound, ScrollText, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Container,
    title: "Container Isolation",
    description: "Agents run in sandboxed environments",
  },
  {
    icon: KeyRound,
    title: "Secrets Management",
    description: "Secure credential storage",
  },
  {
    icon: ScrollText,
    title: "Audit Logging",
    description: "Comprehensive activity trails",
  },
  {
    icon: ShieldCheck,
    title: "RBAC",
    description: "Role-based access control",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Enterprise-Grade Security
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Built for organizations that need governance and compliance.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div className="shrink-0 rounded-lg bg-[var(--color-accent)]/10 p-2.5 text-[var(--color-accent)]">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
