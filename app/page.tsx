import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import events from "@/content/events.json";

export default function HomePage() {
  const upcoming = events.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bg.png"
            alt=""
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <Container className="py-14 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* LEFT: Hero copy */}
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.jpg"
                  alt="Pikes Peak Line Dancers"
                  width={64}
                  height={64}
                  className="rounded-2xl bg-white p-2"
                />
                <p className="text-white/90">Dancin’ with Attitude</p>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Line dancing that’s welcoming, fun, and beginner-friendly.
              </h1>

              <p className="mt-4 text-lg text-white/85">
                Join classes, learn the steps, and meet great people. New dancers welcome.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/schedule">View schedule</Button>
                <Button href="/contact" variant="secondary">
                  Contact us
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Stat label="Beginner friendly" value="✓" />
                <Stat label="Weekly meetups" value="✓" />
                <Stat label="Community" value="✓" />
              </div>
            </div>

            {/* RIGHT: Upcoming events panel */}
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">Upcoming events</h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    What’s happening next
                  </p>
                </div>
                <a
                  href="/events"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80"
                >
                  View all
                </a>
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

              <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
                <p className="text-sm text-neutral-700">
                  New here? Start with our beginner-friendly class.
                </p>
                <div className="mt-3">
                  <Button href="/schedule" variant="secondary">
                    See beginner options
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Below-hero section placeholder */}
      <Container className="py-12">
        <h2 className="text-2xl font-semibold">About the group</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Add a short friendly intro here (who you are, where you meet, what people can expect).
        </p>
      </Container>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/75">{label}</p>
    </div>
  );
}
