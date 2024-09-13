import { QARoute } from "../_types";

type QAFooterProps = {
  previous?: QARoute;
  next?: QARoute;
};

export const QAFooter = ({ previous, next }: QAFooterProps) => {
  return (
    <footer className="row-start-3 flex flex-col gap-6 items-start sm:items-center justify-center">
      {previous && (
        <a
          className="flex flex-row items-center hover:underline underline-offset-4 text-black dark:text-white"
          href={`/qas/${previous.route}`}
          target="_self"
          rel="noopener noreferrer"
        >
          <strong className="no-underline">Previous:&nbsp;</strong>
          {previous.question}
        </a>
      )}
      {next && (
        <a
          className="flex flex-row items-center hover:underline underline-offset-4 text-black dark:text-white"
          href={`/qas/${next.route}`}
          target="_self"
          rel="noopener noreferrer"
        >
          <strong className="no-underline">Next:&nbsp;</strong>
          {next.question}
        </a>
      )}
      <a
        className="flex flex-row items-center no-underline hover:underline underline-offset-4 text-black dark:text-white"
        href={`/`}
        target="_self"
        rel="noopener noreferrer"
      >
        Home →
      </a>
    </footer>
  );
};
