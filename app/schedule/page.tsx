import { Container } from "@/components/Container";

export const metadata = { title: "Schedule" };

export default function Page() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Schedule</h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        Class times, levels, pricing, and what to bring.
      </p>
      <div className="mt-10 rounded-2xl border border-neutral-200 p-6 text-sm text-neutral-600">
        Replace this placeholder with the real content from the export / current site.
      </div>
    </Container>
  );
}
