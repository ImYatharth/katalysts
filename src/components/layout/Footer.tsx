import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-semibold text-sm text-foreground"
          >
            katalysts
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} katalysts. all rights reserved.
        </p>
      </div>
    </footer>
  );
}
