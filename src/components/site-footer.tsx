import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="eyebrow">Presidential THC</p>
          <p className="site-footer__statement">
            An editorial reference to the chemistry and craft behind infused cannabis.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Read the pillar</Link>
          <Link href="/science">Chemistry archive</Link>
          <Link href="/infusion">Infusion methods</Link>
          <Link href="/formats">Format library</Link>
          <Link href="/guides">Practical use guides</Link>
          <Link href="/states">States</Link>
          <Link href="/about">Publication details</Link>
        </nav>
        <p className="site-footer__legal">
          For adults of legal age. Follow local laws and purchase only through licensed
          retailers.
        </p>
      </div>
    </footer>
  );
}
