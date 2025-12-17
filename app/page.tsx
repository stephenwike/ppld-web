import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import events from "@/content/events.json";

const CONVENTION = {
  name: "Pikes Peak Line Dance ...or Bust!",
  anniversary: "25th Anniversary",
  dates: "July 16–July 19, 2026",
  city: "Colorado Springs, CO",
  venue: "Polaris Hotel",
  address: "8989 North Gate Blvd., Colorado Springs, CO 80921",
  phone: "(719) 886-1100",
  price: "$115 thru April 15 • $130 after",
};

const FEATURED_INSTRUCTORS = [
  "Jo Thompson Szymanski",
  "John Robinson",
  "Jill Babinec",
  "Roy Verdonk",
  "Darren Bailey",
  "Cody Flowers",
];

export default function HomePage() {
  const upcoming = events.slice(0, 4);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
        {/* photo readability without blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/35" />
      </div>

      <Container className="py-2 sm:py-14">
        {/* <p className="text-white/90 text-sm sm:text-base">
          Dancin’ with Altitude… It’s just what we do!
        </p> */}

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* LEFT: convention */}
          <div className="rounded-3xl border border-white/25 bg-black/50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs font-medium text-white">
                Yearly Convention • {CONVENTION.anniversary}
              </span>
              <span className="text-sm text-white/90">{CONVENTION.dates}</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-3xl">
              {CONVENTION.name}
            </h1>

            <p className="mt-3 text-white/85">
              {CONVENTION.city} • New location:{" "}
              <span className="font-medium text-white">{CONVENTION.venue}</span>
            </p>

            <div className="mt-5 grid gap-2 text-sm text-white/85">
              <p>
                <span className="font-medium text-white">Address:</span> {CONVENTION.address}
              </p>
              <p>
                <span className="font-medium text-white">Hotel Direct:</span> {CONVENTION.phone}
              </p>
              <p>
                <span className="font-medium text-white">Pricing:</span> {CONVENTION.price}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80 font-bold">
                Featured instructors
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {FEATURED_INSTRUCTORS.map((name) => (
                  <span
                    key={name}
                    className="rounded-md border border-white/20 bg-white/75 px-3 py-1 text-m text-pink-700 font-bold"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/or-bust">Convention details</Button>
              <Button href="/or-bust/register" variant="secondary">
                Register now
              </Button>
            </div>
          </div>

          {/* RIGHT: events */}
          <div className="rounded-3xl border border-white/25 bg-black/50 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Upcoming events</h2>
                <p className="mt-1 text-sm text-white/80">What’s happening next</p>
              </div>
              <Link
                href="/events"
                className="text-sm font-medium text-white underline underline-offset-4 hover:opacity-80"
              >
                View all
              </Link>
            </div>

            <div className="mt-5 space-y-3">
              {upcoming.map((e) => (
                <div
                  key={e.id}
                  className="rounded-2xl border border-white/15 bg-black/10 p-4 hover:bg-black/20"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-medium text-white">{e.title}</p>
                    <p className="whitespace-nowrap text-xs text-white/70">{e.date}</p>
                  </div>
                  <p className="mt-1 text-sm text-white/80">{e.location}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/10 px-4 py-3 text-sm font-medium text-white hover:bg-black/20"
              >
                View schedule
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/10 px-4 py-3 text-sm font-medium text-white hover:bg-black/20"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* extra breathing room to appreciate the mountains */}
        <div className="h-10 sm:h-16" />
      </Container>
    </section>
  );
}
