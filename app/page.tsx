import Image from "next/image";
import { qaRoutes } from "./_constants/qaRoutes";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="light:invert"
          src="https://vercel.com/mktng/_next/static/media/logo-vercel-logotype-dark.e8c0a742.svg"
          alt="Vercel logo"
          width={180}
          height={38}
          priority
        />
        <h1>╳</h1>
        <Image
          className="rounded-full"
          src="https://johannes.bradt.me/images/johannes.png"
          alt="Photo of Johannes Bradt"
          width={120}
          height={120}
          priority
        />
        <p className="text-center">
          Thank you for giving me the opportunity to apply for the role of a
          Customer Success Manager with this interesting take home exercise.
        </p>
        <p className="text-center">
          Below you will find a list of questions and answers that I have
          prepared for you. I hope you enjoy reading them as much as I enjoyed
          writing them.
        </p>
        <p className="text-center">
          <strong>Best regards,</strong>
          <br />
          <strong>Johannes Bradt</strong>
        </p>

        <h3 className="text-center text-2xl">Questions and Answers</h3>
        <ol className="list-decimal list-inside">
          {qaRoutes.map((qa) => (
            <li key={qa.question}>
              <a
                href={`/qas/${qa.route}`}
                className="flex items-center pb-2 underline underline-offset-4"
              >
                {qa.question}
              </a>
            </li>
          ))}
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 pt-10 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://johannes.bradt.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          website →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/johannesbradt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          linkedin →
        </a>
      </footer>
    </div>
  );
}
