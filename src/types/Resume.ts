import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ResumeDataProp = {
  data: ResumeProp;
};

export type ResumeProp = {
  id: string;
  name: string;
  role: string;
  summary: string;
  user_status: string;
  social_media: SocialMediaProp[];
  about: string;
  experiences: ExperienceProp[];
  projects: ProjectProp[];
  awards: AwardProp[];
  skills: SkillProp[];
  educations: EducationProp[];
  nationality: string;
  email: string;
  phone: string;
};

export type AwardProp = {
  at: string;
  name: string;
  url: string;
};

export type ExperienceProp = {
  from: string;
  to: string | null;
  role: string;
  company: string;
  descriptions: Descriptions;
  tags: string[];
  country: string;
};

export type ProjectProp = {
  name: string;
  description: string;
  tags: string[];
};

export type SkillProp = {
  name: string;
  skill: string[];
  active_skill?: string[];
};

export type EducationProp = {
  from: string;
  to: string;
  country: string;
  name: string;
  degree: string;
};

export type SocialMediaProp = {
  name: string;
  url: string;
};

export type socialMediaIconType = {
  [key: string]: IconDefinition;
};

export type Descriptions = {
  time: number;
  blocks: Block[];
  version: string;
};

export type Block = {
  id: string;
  type: string;
  data: Data;
};

export type Data = {
  text: string;
};
