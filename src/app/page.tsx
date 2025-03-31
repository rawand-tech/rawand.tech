import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6 md:p-12 gap-4 grid relative scroll-smooth h-dvh overflow-auto [scroll-snap-type:_y_mandatory]">
      <section className="gap-3 flex flex-col justify-center w-full max-w-7xl mx-auto h-full min-h-dvh [scroll-snap-align:_start] px-4 sm:px-6">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900">
          hi, i{"'"}m rawand
        </h1>
        <p className="text-xl md:text-2xl">
          I{"'"}m a 19-year-old web developer based in Germany 🇩🇪, specializing
          in AI-powered products.
        </p>
        <p className="text-xl md:text-2xl">
          <span className="font-bold text-zinc-800">My tech stack:</span>{" "}
          Appwrite, Google Cloud, Next.js, Figma, Notion
        </p>
        <p className="text-xl md:text-2xl">
          I believe the best products are simple, yet high-quality!
        </p>
      </section>
      <section className="gap-3 flex flex-col justify-center w-full max-w-7xl mx-auto h-full min-h-dvh [scroll-snap-align:_start] px-4 sm:px-6">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900">
          Let{"'"}s connect!
        </h2>
        <p className="text-xl md:text-2xl">
          The fastest way to reach me is on X{" "}
          <Link
            href="https://twitter.com/rawand.tech"
            className="font-bold text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            @rawand.tech
          </Link>{" "}
          or Instagram{" "}
          <Link
            href="https://instagram.com/rawand.tech"
            className="font-bold text-red-600 underline hover:text-red-800 transition-colors"
          >
            @rawand.tech
          </Link>
          .
        </p>
        <p className="text-xl md:text-2xl">
          Shoot me a message at:{" "}
          <code className="cursor-copy text-zinc-900 underline hover:bg-zinc-200 transition-colors p-1 rounded">
            hello@rawand.tech
          </code>
        </p>
      </section>
      <section className="gap-3 flex flex-col justify-center w-full max-w-7xl mx-auto h-full min-h-dvh [scroll-snap-align:_start] px-4 sm:px-6">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900">
          🚀 Building a SaaS tool?
        </h2>
        <p className="text-xl md:text-2xl">
          If you{"'"}re working on something exciting and need a hand taking it
          to the next level, I{"'"}d love to help.
        </p>
        <p className="text-xl md:text-2xl">
          Drop me an email at:{" "}
          <code className="cursor-copy text-zinc-900 underline hover:bg-zinc-200 transition-colors p-1 rounded">
            help@rawand.tech
          </code>
        </p>
      </section>
    </div>
  );
}
