import ExternalLink from "@/components/About/ExternalLink";
import { AwardProp } from "@/types/Resume";

export default function Award({ award }: { award: AwardProp }) {
  return (
    <div className="flex flex-col gap-y-3">
      <span className="datetime">{new Date(award.at).getFullYear()}</span>
      <ExternalLink href={award.url}>{award.name}</ExternalLink>
    </div>
  );
}
