import React from "react";
import Link from "next/link";
import { privacy } from "@/lib/pricavyData";

const PrivacyPage = () => {
  return (
    <main className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_60%)]" />

      <section className="relative border-b border-blue-100 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="animate-in fade-in slide-in-from-top-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">
            Legal & Privacy
          </p>
          <h1 className="animate-in fade-in slide-in-from-top-3 mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="animate-in fade-in slide-in-from-top-4 mt-5 max-w-3xl text-base leading-7 text-blue-50/95 sm:text-lg">
            This policy explains what data we collect, why we collect it, and
            how we protect your information while you use Sahmiye.
          </p>
          <div className="animate-in fade-in slide-in-from-top-5 mt-8 flex flex-wrap gap-3">
            <Link
              href="#policy-sections"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              View sections
            </Link>
            <Link
              href="mailto:support@sahmiye.com"
              className="rounded-xl border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact support
            </Link>
          </div>
        </div>
      </section>

      <section
        id="policy-sections"
        className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-28">
            <p className="mb-3 text-sm font-semibold text-slate-900">
              Quick Navigation
            </p>
            <ul className="space-y-1">
              {privacy.map((pri) => (
                <li key={pri.id}>
                  <a
                    href={`#section-${pri.id}`}
                    className="group block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span className="mr-2 font-semibold text-blue-500/80 group-hover:text-blue-700">
                      {String(pri.id + 1).padStart(2, "0")}
                    </span>
                    {pri.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-4">
            {privacy.map((pri) => (
              <article
                key={pri.id}
                id={`section-${pri.id}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md sm:p-7"
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Section {String(pri.id + 1).padStart(2, "0")}
                </div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {pri.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {pri.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            Need help with your data request?
          </h3>
          <p className="mt-2 text-base leading-7 text-slate-600">
            For privacy-related questions, access requests, or account deletion
            inquiries, contact our support team.
          </p>
          <Link
            href="mailto:support@sahmiye.com"
            className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            support@sahmiye.com
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
