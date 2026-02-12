import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaApple } from "react-icons/fa";
import { homeCards } from "@/lib/data";
const GooglePlayMark = () => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
    <polygon points="2,2 13,12 2,22" fill="#34A853" />
    <polygon points="13,12 18,9 22,12 18,15" fill="#FBBC04" />
    <polygon points="2,2 18,9 22,12 13,12" fill="#4285F4" />
    <polygon points="2,22 13,12 22,12 18,15" fill="#EA4335" />
  </svg>
);

const HomePage = () => {
  return (
    <main className="bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <section
        className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/heroimg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/50" />

        <div className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center">
          <p className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
            Smart Property Platform
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Sahmiye Application
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Where you get your Space
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl border border-slate-300 bg-black px-4 text-white hover:bg-slate-900"
            >
              <Link href="#" aria-label="Get it on Google Play">
                <GooglePlayMark />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wide">
                    Get it on
                  </span>
                  <span className="text-lg font-semibold">Google Play</span>
                </span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl border border-slate-300 bg-black px-4 text-white hover:bg-slate-900"
            >
              <Link href="#" aria-label="Download on the App Store">
                <FaApple className="size-6 text-white" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wide">
                    Download on the
                  </span>
                  <span className="text-lg font-semibold">App Store</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl mt-24 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mb-8 flex flex-col gap-2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Everything You Need for Your Next Move
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 sm:text-base lg:max-w-3xl">
            Choose the path that fits your goal and get expert support through
            every step.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              >
                <div className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-500">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {card.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-blue-500 transition-colors hover:text-blue-600"
                >
                  {card.cta}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
