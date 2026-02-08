import Link from "next/link";
import { NAV_LINKS, CALENDLY_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-12 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link
            href="/"
            className="font-poppins font-bold text-xl text-white tracking-tight"
          >
            katalysts
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary-light transition-colors"
            >
              book a call
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} katalysts. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
