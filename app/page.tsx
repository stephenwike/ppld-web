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
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container className="py-10 sm:py-14">
        {/* BIG convention “billboard” */}
        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
              Yearly Convention • {CONVENTION.anniversary}
            </span>
            <span className="text-sm text-white/85">{CONVENTION.dates}</span>
            <span className="text-white/30">•</span>
            <span className="text-sm text-white/85">{CONVENTION.city}</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {CONVENTION.name}
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-white/85">
            New location: <span className="font-medium text-white">{CONVENTION.venue}</span>. Workshops, social dancing,
            and community — all weekend.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/or-bust">See convention details</Button>
            <Button href="/or-bust/register" variant="secondary">
              Register now
            </Button>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <InfoCard label="Venue" value={`${CONVENTION.venue}`} sub={`${CONVENTION.address}`} />
            <InfoCard label="Hotel direct" value={CONVENTION.phone} sub="Call for general hotel questions" />
            <InfoCard label="Weekend pricing" value={`${CONVENTION.priceEarly} / ${CONVENTION.priceLate}`} sub="Single-day passes available" />
          </div>
        </div>

        {/* Split panel: taglines + upcoming events */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur sm:p-8">
            <p className="text-white/90">Dancin’ with Altitude… It’s just what we do!</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Weekly dancing</h2>
            <p className="mt-3 text-white/85">
              New dancers welcome. Come learn the basics and get moving with a friendly group.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/schedule" variant="secondary">View schedule</Button>
              <Button href="/contact" variant="secondary">Ask a question</Button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Upcoming events</h3>
                <p className="mt-1 text-sm text-neutral-600">What’s happening next</p>
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
                <div key={e.id} className="rounded-2xl border border-neutral-200 p-4 hover:border-neutral-300">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-medium">{e.title}</p>
                    <p className="whitespace-nowrap text-xs text-neutral-500">{e.date}</p>
                  </div>
                  <p className="mt-1 text-sm text-neutral-700">{e.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-3xl bg-white/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-white/80">{sub}</p>
    </div>
  );
}
