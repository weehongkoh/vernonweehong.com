import Badge from "@/components/Common/Badge";
import Card from "@/components/Common/Card";
import { ExperienceProp } from "@/types/Resume";

export default function Experience({
  experience,
}: {
  experience: ExperienceProp;
}) {
  return (
    <Card classes="card grid gap-2 md:grid-cols-[minmax(150px,150px)_1fr] md:gap-4">
      <div className="z-10">
        <span className="datetime">
          {new Date(experience.from).getFullYear()} &#8212;{" "}
          {experience.to ? new Date(experience.to).getFullYear() : "CURRENT"}
        </span>
      </div>
      <div className="z-10 flex flex-col gap-y-2">
        <h3>
          {experience.role}
          <span className="px-2">&#8226;</span>
          {experience.company}
        </h3>
        <div>
          {experience.descriptions.blocks.map((block, j) => (
            <p key={j} className="text-sm">
              {block.data.text}
            </p>
          ))}
        </div>
        <Badge classes="mt-2" items={experience.tags} />
      </div>
    </Card>
  );
}
