"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import logoImg from "@/public/logo.png";

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/#providers", label: "Providers" },
  { href: "/#security", label: "Security" },
  { href: "/docs/", label: "Docs" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImg}
            alt="Clawix"
            width={120}
            height={32}
            className="h-8 w-auto logo-themed"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/ClawixAI/clawix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
          >
            GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-[var(--color-text)]"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/ClawixAI/clawix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-base font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
            >
              GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
