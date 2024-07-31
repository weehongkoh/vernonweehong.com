import Badge from "@/components/Common/Badge";
import Card from "@/components/Common/Card";
import { splitNewLine, stripHtmlTags } from "@/helpers";

type ProjectProps = {
  project: {
    name: string;
    description: string;
    tags: string[];
  };
};

export default function Project({ project }: ProjectProps) {
  return (
    <Card classes="card flex flex-col gap-y-2">
      <h3 className="z-10">{project.name}</h3>
      {splitNewLine(stripHtmlTags(project.description)).map((p, index) => (
        <p key={index} className="z-10 text-sm">
          {p}
        </p>
      ))}
      <Badge classes="z-10 mt-2" items={project.tags} />
    </Card>
  );
}
