import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#001633] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/gareth-digital-logo.png"
            alt="Gareth Digital Solutions"
            width={190}
            height={105}
            className="mb-4 h-16 w-auto rounded bg-white object-contain p-1"
          />
          <p className="max-w-sm text-sm leading-6 text-blue-100">
            Helping local businesses recover missed enquiries with smart automation and clear
            follow-up systems.
          </p>
          <p className="mt-5 text-sm font-bold text-skybrand">{siteConfig.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.youtube.com/channel/UC5wg1ek-UkXQOvp_LPTQmmg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gareth Digital Solutions on YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-skybrand/45 text-skybrand transition hover:border-skybrand hover:bg-skybrand/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gareth-solomon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gareth Solomon on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-skybrand/45 text-skybrand transition hover:border-skybrand hover:bg-skybrand/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.41v1.57h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29h.03ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.03H3.53V8.99H7.1v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/garethdigitalsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gareth Digital Solutions on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-skybrand/45 text-skybrand transition hover:border-skybrand hover:bg-skybrand/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-skybrand">
            Quick Links
          </h3>
          <div className="grid gap-2 text-sm text-blue-100">
            <Link href="/#home">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/free-tools">Free Tools</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-skybrand">
            Contact
          </h3>
          <div className="grid gap-2 text-sm text-blue-100">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.phoneHref} aria-label={`Call Gareth on ${siteConfig.phoneDisplay}`}>
              Call Gareth: {siteConfig.phoneDisplay}
            </a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
