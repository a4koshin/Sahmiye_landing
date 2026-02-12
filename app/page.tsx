import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";


const HomePage = () => {


  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:pt-16">
        <div className="flex h-full flex-col justify-center">
          {/* <p className="inline-flex w-fit rounded-full border border-[#0069FE]/25 bg-[#0069FE]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0069FE]">
           
          </p> */}
          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Sahmiye Mobile {" "}
            <span className="text-[#0069FE]">Application</span>
          </h1>
       
          <div className="mt-8 lg:flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-xl bg-[#0069FE] text-white hover:bg-[#0057D1]"
            >
              <Link href="#" aria-label="Download on the App Store">
                <FaApple className="size-4" />
                App Store
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-xl border-[#0069FE] bg-white text-[#0069FE] hover:bg-[#0069FE]/10 hover:text-[#0069FE]"
            >
              <Link href="#" aria-label="Get it on Google Play">
                <FaGooglePlay className="size-4" />
                Google Play
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden">
            <Image
              src="/hero.png"
              alt="Sahmiye app preview"
              width={3200}
              height={900}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Everything You Need for Your Next Move
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
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
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0069FE]/35 hover:shadow-md"
              >
                <div className="inline-flex rounded-xl bg-[#0069FE]/10 p-2.5 text-[#0069FE]">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {card.description}
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#0069FE] transition-colors hover:text-[#0057D1]"
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
