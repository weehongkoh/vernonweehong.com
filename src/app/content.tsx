import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Badge from "@/components/Common/Badge";
import Card from "@/components/Common/Card";
import SocialMedia from "@/components/Common/SocialMedia";
import { resume } from "@/data/resume";
import { splitNewLine, stripHtmlTags } from "@/helpers";

export default async function Content() {
  const {
    data: { about, experiences, projects, awards, skills, educations },
  } = resume;

  return (
    <div id="me" className="flex flex-col gap-y-36">
      <div className="fade-content fade-top-content"></div>
      <section id="about">
        <h2>About</h2>
        {splitNewLine(stripHtmlTags(about)).map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <SocialMedia classes="lg:hidden" />
      </section>
      <section id="experience">
        <h2>Experiences</h2>
        <div className="group/list flex flex-col gap-12">
          {experiences.map((experience, index) => (
            <Card
              classes="card grid gap-2 md:grid-cols-[minmax(150px,150px)_1fr] md:gap-4"
              key={index}
            >
              <div className="z-10">
                <span className="datetime">
                  {new Date(experience.from).getFullYear()} &#8212;{" "}
                  {experience.to
                    ? new Date(experience.to).getFullYear()
                    : "CURRENT"}
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
                    <p key={j} className="my-3 text-sm">
                      {block.data.text}
                    </p>
                  ))}
                </div>
                <Badge classes="mt-2" items={experience.tags} />
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section id="project">
        <h2>Projects</h2>
        <div className="group/list flex flex-col gap-12">
          {projects.map((project, index) => (
            <Card classes="card flex flex-col gap-y-2" key={index}>
              <h3 className="z-10">{project.name}</h3>
              {splitNewLine(stripHtmlTags(project.description)).map(
                (p, index) => (
                  <p key={index} className="z-10 text-sm">
                    {p}
                  </p>
                )
              )}
              <Badge classes="z-10 mt-2" items={project.tags} />
            </Card>
          ))}
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div className="grid grid-cols-1 gap-y-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="grid grid-cols-1 gap-2 md:grid-cols-[minmax(150px,150px)_1fr]"
            >
              <div>
                <h3>{skill.name}</h3>
              </div>
              <Badge items={skill.skill} activeItems={skill.active_skill} />
            </div>
          ))}
        </div>
      </section>
      <section id="award">
        <h2>Awards</h2>
        <div className="grid grid-cols-1 gap-12">
          {awards.map((award) => (
            <div key={award.name}>
              <div className="flex flex-col gap-y-3">
                <span className="datetime">
                  {new Date(award.at).getFullYear()}
                </span>
                <a href={award.url} target="_blank" className="external-link">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <h3 className="ml-2.5 text-sm">{award.name}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="education">
        <h2>Educations</h2>
        <div className="group/list flex flex-col gap-12">
          {educations.map((education, index) => (
            <Card
              classes="card grid gap-2 md:grid-cols-[minmax(150px,150px)_1fr] md:gap-4"
              key={index}
            >
              <div className="z-10">
                <span className="datetime">
                  {new Date(education.from).getFullYear()} &#8212;{" "}
                  {education.to
                    ? new Date(education.to).getFullYear()
                    : "CURRENT"}
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
          ))}
        </div>
      </section>
      <div className="fade-content fade-bottom-content"></div>
    </div>
  );
}
