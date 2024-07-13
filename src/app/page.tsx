import Content from "@/app/content";
import Nav from "@/components/Common/Nav";
import Reference from "@/components/Common/Reference";
import SocialMedia from "@/components/Common/SocialMedia";
import { resume } from "@/data/resume";
import { ResumeDataProp } from "@/types/Resume";

export default function Home() {
  const { data }: ResumeDataProp = resume;

  return (
    <div className="container">
      <div className="panel">
        <header className="left-panel">
          <div className="flex flex-col gap-y-3">
            <h1>{data.name}</h1>
            <h2>{data.role}</h2>
            <p className="lg:max-w-xs">{data.summary}</p>
            {data.user_status && (
              <span className="text-active">{data.user_status}</span>
            )}
            <Nav />
          </div>
          <footer className="hidden lg:flex">
            <SocialMedia />
            <Reference />
          </footer>
        </header>

        <main className="right-panel">
          <Content />
        </main>
      </div>
    </div>
  );
}
