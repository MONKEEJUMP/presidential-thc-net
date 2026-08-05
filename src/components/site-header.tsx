import Image from "next/image";
import Link from "next/link";

import { primaryNavigation } from "@/lib/site";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to the article
      </a>
      <div className="site-header__inner">
        <Link className="brand-lockup" href="/" aria-label="Presidential THC home">
          <Image
            className="brand-crest"
            src="/images/presidential-crest.webp"
            width={512}
            height={512}
            sizes="(max-width: 640px) 68px, 86px"
            priority
            alt="Presidential crest"
          />
          <span className="brand-lockup__text">
            <span className="brand-lockup__name">Presidential THC</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const isCurrent =
              currentPath === item.href || currentPath.startsWith(`${item.href}/`);

            return (
              <Link
                href={item.href}
                key={item.href}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
