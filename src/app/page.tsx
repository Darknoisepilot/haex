// app/page.tsx
import Link from 'next/link';
import Container from '@/components/Container';
import { Button } from '@/components/Button';
// When you have an asset, switch the hero placeholder to next/image

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-32">
      {/* Hero */}
      <section className="pt-16 md:pt-24">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl md:text-6xl/tight font-semibold">
              Hæxsliðe — build, explore, and run hex crawls.
            </h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              A fast, focused tool to sketch hex maps, track encounters, and
              keep your table moving.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/app">
                <Button size="lg" className="min-w-32">
                  Open the app
                </Button>
              </Link>
              <Link href="#learn-more">
                <Button size="lg" variant="secondary">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          {/* Placeholder visual; swap with <Image> when ready */}
          <div className="h-64 md:h-[22rem] rounded-2xl bg-neutral-900/60 border border-neutral-800" />
        </Container>
      </section>

      {/* Features */}
      <section id="learn-more">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Why Hæxsliðe?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Feature
              title="Hex-first editor"
              desc="Draw, label, and colour hexes with snapping and keyboard shortcuts."
            />
            <Feature
              title="Encounters & notes"
              desc="Attach lore, monsters, and rules references to any hex."
            />
            <Feature
              title="Play-friendly UI"
              desc="Dark UI, readable fonts, and fast keyboard navigation at the table."
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Build your first crawl
          </h3>
          <p className="mt-3 text-neutral-300">
            Open a blank map and start sketching. You can import assets later.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/app">
              <Button size="lg">Get started</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-neutral-800 p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-neutral-300">{desc}</p>
    </div>
  );
}
