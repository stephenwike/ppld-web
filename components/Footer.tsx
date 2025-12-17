import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <Container className="flex flex-col gap-2 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pikes Peak Line Dancers</p>
        <p className="text-neutral-500">Built with Next.js</p>
      </Container>
    </footer>
  );
}
