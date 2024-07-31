import Badge from "@/components/Common/Badge";
import { SkillProp } from "@/types/Resume";

export default function Skill({ skill }: { skill: SkillProp }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-[minmax(150px,150px)_1fr]">
      <div>
        <h3>{skill.name}</h3>
      </div>
      <Badge items={skill.skill} activeItems={skill.active_skill} />
    </div>
  );
}
