import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-accent))" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Move from Experiment to Production
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Stop building AI demos. Start deploying AI systems.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs/getting-started/"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--color-brand)] transition-colors hover:bg-white/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://discord.gg/clawix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Join Community
            </a>
            <a
              href="https://github.com/ClawixAI/clawix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
