import { Users, Lock, Layers, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Isolated workspaces per user or team",
  },
  {
    icon: Layers,
    title: "Separate agents, memory, and credentials per workspace",
  },
  {
    icon: Lock,
    title: "Full tenant isolation — no data leakage between users",
  },
  {
    icon: ShieldCheck,
    title: "Workspace-level RBAC and permissions",
  },
];

export function WorkspacesSection() {
  return (
    <section id="workspaces" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Multi-User with Isolated Workspaces
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4"
              >
                <div className="shrink-0 text-[var(--color-accent)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
