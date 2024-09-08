import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reference() {
  return (
    <section
      id="reference"
      className="flex flex-col items-center gap-y-1 text-slate-400 lg:items-start"
    >
      <p className="text-center text-xs lg:text-left">
        Developed and inspired based on{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="relative text-xs"
        >
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="absolute top-0 h-2 w-2"
          />
          <span className="ml-2.5">Brittany Chiang</span>
        </a>
        &apos;s website.
      </p>
      <p className="text-center text-xs lg:text-left">
        Built with <span className="highlight">NextJs</span> and
        <span className="highlight"> TailwindCSS</span>, deployed with{" "}
        <span className="highlight">Vercel</span>.
      </p>
      <p className="text-xs">
        All text is set in the <span className="highlight">Inter</span>{" "}
        typeface.
      </p>
    </section>
  );
}
