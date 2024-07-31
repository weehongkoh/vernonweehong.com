import Card from "@/components/Common/Card";
import { EducationProp } from "@/types/Resume";

export default function Education({ education }: { education: EducationProp }) {
  return (
    <Card classes="card grid gap-2 md:grid-cols-[minmax(150px,150px)_1fr] md:gap-4">
      <div className="z-10">
        <span className="datetime">
          {new Date(education.from).getFullYear()} &#8212;{" "}
          {education.to ? new Date(education.to).getFullYear() : "CURRENT"}
        </span>
      </div>
      <div className="z-10 flex flex-col gap-y-2">
        <h3>
          {education.name}
          <span className="px-2">&#8226;</span>
          {education.country}
        </h3>
        <p>{education.degree}</p>
      </div>
    </Card>
  );
}
