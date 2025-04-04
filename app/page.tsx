import Link from "next/link";

export default function HomePage() {
  return (
    <div className="lowercase p-6 md:p-12 gap-4 grid relative scroll-smooth h-dvh overflow-auto [scroll-snap-type:_y_mandatory]">
      <Section title="my name is rawand">
        <p className="text-xl md:text-2xl">
          I{"'"}m a 19-year-old web developer based in Germany 🇩🇪, specializing
          in AI-powered products.
        </p>
        <p className="text-xl md:text-2xl">
          I am currently building an app called BewerbAI.
        </p>
        <p className="text-xl md:text-2xl">
          <span className="font-bold text-zinc-800">My tech stack:</span>{" "}
          Appwrite, Google Cloud, Python, JS/TS, nextjs, Figma, Notion
        </p>
      </Section>
      <Section title="Let's connect!">
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
          shoot me a message at:{" "}
          <code className="cursor-copy text-zinc-900 underline hover:bg-zinc-200 transition-colors p-1 rounded">
            hello@rawand.tech
          </code>
        </p>
      </Section>
      <Section title="🚀 Building a SaaS tool?">
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
      </Section>
    </div>
  );
}

function Section({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section className="gap-4 flex flex-col justify-center w-full max-w-7xl mx-auto h-full min-h-dvh [scroll-snap-align:_start] px-4 sm:px-6">
      <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl text-zinc-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
