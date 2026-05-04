const DOCS_BASE =
  "https://raw.githubusercontent.com/ClawixAI/clawix/main/docs";

export interface DocMeta {
  slug: string;
  file: string;
  title: string;
  description: string;
  order: number;
}

export const docFiles: DocMeta[] = [
  {
    slug: "getting-started",
    file: "GET_STARTED.md",
    title: "Getting Started",
    description: "Install and run Clawix in minutes",
    order: 1,
  },
  {
    slug: "configuration",
    file: "CONFIG.md",
    title: "Configuration",
    description: "Environment variables and settings",
    order: 2,
  },
  {
    slug: "providers",
    file: "PROVIDERS.md",
    title: "LLM Providers",
    description: "Configure Anthropic, OpenAI, and other providers",
    order: 3,
  },
  {
    slug: "agents",
    file: "AGENTS.md",
    title: "Agents",
    description: "Create and manage AI agents",
    order: 4,
  },
  {
    slug: "skills",
    file: "SKILLS.md",
    title: "Skills",
    description: "Extend agent capabilities with skills",
    order: 5,
  },
  {
    slug: "memory",
    file: "MEMORY.md",
    title: "Memory",
    description: "Agent memory and context management",
    order: 6,
  },
  {
    slug: "governance",
    file: "GOVERNANCE.md",
    title: "Governance",
    description: "RBAC and access control",
    order: 7,
  },
  {
    slug: "security",
    file: "SECURITY.md",
    title: "Security",
    description: "Security features and best practices",
    order: 8,
  },
  {
    slug: "multi-users",
    file: "MULTI-USERS.md",
    title: "Multi-User Setup",
    description: "Configure for multiple users",
    order: 9,
  },
  {
    slug: "spec",
    file: "SPEC.md",
    title: "Specification",
    description: "Technical specification and architecture",
    order: 10,
  },
];

export function getDocSlugs(): string[] {
  return docFiles.map((d) => d.slug);
}

export function getDocMeta(slug: string): DocMeta | undefined {
  return docFiles.find((d) => d.slug === slug);
}

export function getAllDocMeta(): DocMeta[] {
  return [...docFiles].sort((a, b) => a.order - b.order);
}

export async function getDocContent(
  slug: string
): Promise<{ meta: DocMeta; content: string } | null> {
  const meta = getDocMeta(slug);
  if (!meta) return null;

  try {
    const res = await fetch(`${DOCS_BASE}/${meta.file}`, {
      next: { revalidate: false },
    });

    if (!res.ok) {
      console.error(`Failed to fetch doc ${meta.file}: ${res.status}`);
      return null;
    }

    const content = await res.text();
    return { meta, content };
  } catch (error) {
    console.error(`Error fetching doc ${meta.file}:`, error);
    return null;
  }
}
