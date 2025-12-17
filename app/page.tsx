import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import events from "@/content/events.json";

export default function HomePage() {
  const upcoming = events.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/bg.png" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <Container className="py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <Image
                src="/images/hero.jpg"
                alt="Pikes Peak Line Dancers"
                width={72}
                height={72}
                className="rounded-xl bg-white/90 p-2"
              />
              <p className="text-white/90">Dancin’ with Attitude</p>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Line dancing that’s welcoming, fun, and beginner-friendly.
            </h1>

            <p className="mt-4 text-lg text-white/85">
              Clear schedules. Modern design. Mobile-first. Easy updates.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/schedule">View schedule</Button>
              <Button href="/contact" variant="secondary">Contact us</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <h2 className="text-2xl font-semibold">Upcoming</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {upcoming.map((e) => (
            <div key={e.id} className="rounded-2xl border border-neutral-200 p-5">
              <p className="text-sm text-neutral-500">{e.date}</p>
              <p className="mt-1 font-medium">{e.title}</p>
              <p className="mt-2 text-sm text-neutral-700">{e.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
