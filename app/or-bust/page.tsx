import Link from "next/link";
import { Container } from "@/components/Container";

export default function OrBustPage() {
  return (
    <Container className="py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-600">25th Anniversary</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            Pikes Peak Line Dance ...or Bust!
          </h1>
          <p className="mt-3 text-lg text-neutral-700">
            July 16–July 19, 2026 • Colorado Springs, CO
          </p>
        </div>

        <Link
          href="/or-bust/register"
          className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Register
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-neutral-200 p-6">
          <h2 className="text-2xl font-semibold">New location</h2>
          <p className="mt-3 text-neutral-700">
            <span className="font-medium">Polaris Hotel</span><br />
            8989 North Gate Blvd.<br />
            Colorado Springs, CO 80921
          </p>
          <p className="mt-3 text-neutral-700">
            Hotel Direct: <span className="font-medium">(719) 886-1100</span>
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            To book under the group block, use the hotel link on pplinedance.org.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 p-6">
          <h2 className="text-2xl font-semibold">Confirmed instructors</h2>
          <ul className="mt-3 list-disc pl-5 text-neutral-700">
            <li>Jo Thompson Szymanski</li>
            <li>John Robinson</li>
            <li>Jill Babinec</li>
            <li>Roy Verdonk</li>
            <li>Darren Bailey</li>
            <li>Cody Flowers</li>
          </ul>
        </section>
      </div>

      <section className="mt-6 rounded-3xl border border-neutral-200 p-6">
        <h2 className="text-2xl font-semibold">Weekend registration includes</h2>
        <p className="mt-2 text-neutral-700">
          Pricing: <span className="font-medium">$115 thru April 15</span>, <span className="font-medium">$130 after</span>.
        </p>
        <ul className="mt-4 list-disc pl-5 text-neutral-700">
          <li>Thursday night Welcome Back party</li>
          <li>All workshops Fri, Sat &amp; Sun</li>
          <li>Welcome Back Friday night - Classic</li>
          <li>Door prize tickets</li>
          <li>Saturday Night Dance &amp; Performance</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-600">
          Single day passes available. Beginner workshops throughout the weekend.
        </p>
      </section>

      <section className="mt-6 rounded-3xl border border-neutral-200 p-6">
        <h2 className="text-2xl font-semibold">Questions?</h2>
        <p className="mt-2 text-neutral-700">
          Dave &amp; Cheryl Bingham —{" "}
          <a className="underline underline-offset-4" href="mailto:binghamdancin@gmail.com">
            binghamdancin@gmail.com
          </a>{" "}
          — <a className="underline underline-offset-4" href="tel:+17193214724">(719) 321-4724</a>
        </p>
      </section>
    </Container>
  );
}
