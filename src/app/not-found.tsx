import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found" id="main-content">
        <h1>This page is not in the archive.</h1>
        <p>
          The address may have changed, or the requested reference may not have been
          published.
        </p>
        <Link className="button-link" href="/">
          Return to Presidential THC
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
