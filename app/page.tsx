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
  priceEarly: "$115 thru April 15",
  priceLate: "$130 after",
};

export default function HomePage() {
  const upcoming = events.slice(0, 4);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />

        {/* Make mountains more visible: softer overlay + bottom gradient */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/45" />
      </div>

      <Container className="py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* LEFT PANEL: Convention highlight */}
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                Yearly Convention • {CONVENTION.anniversary}
              </span>
              <span className="text-sm text-white/90">{CONVENTION.dates}</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {CONVENTION.name}
            </h1>

            <p className="mt-4 text-lg text-white/85">
              {CONVENTION.city} • New location:{" "}
              <span className="font-medium text-white">{CONVENTION.venue}</span>
            </p>

            <div className="mt-5 space-y-2 text-sm text-white/85">
              <p>
                <span className="font-medium text-white">Address:</span> {CONVENTION.address}
              </p>
              <p>
                <span className="font-medium text-white">Hotel Direct:</span> {CONVENTION.phone}
              </p>
              <p>
                <span className="font-medium text-white">Weekend pricing:</span>{" "}
                {CONVENTION.priceEarly} / {CONVENTION.priceLate}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/or-bust">Convention details</Button>
              <Button href="/or-bust/register" variant="secondary">
                Register now
              </Button>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-4">
              <p className="text-white/90">
                Dancin’ with Altitude… It’s just what we do!
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: Upcoming events */}
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Upcoming events</h2>
                <p className="mt-1 text-sm text-neutral-600">
                  What’s happening next
                </p>
              </div>
              <Link
                href="/events"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80"
              >
                View all
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {upcoming.map((e) => (
                <div
                  key={e.id}
                  className="rounded-2xl border border-neutral-200 p-4 hover:border-neutral-300"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-medium">{e.title}</p>
                    <p className="whitespace-nowrap text-xs text-neutral-500">
                      {e.date}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-neutral-700">{e.location}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                View schedule
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
