import { Suspense } from "react";

import Script from "next/script";

import Content from "@/app/content";
import Loading from "@/app/loading";
import LeftPanel from "@/components/Common/LeftPanel";
import { resume } from "@/data/resume";
import { ResumeDataProp } from "@/types/Resume";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.data.name,
  description:
    "Vernon Wee Hong KOH is a Software Engineer and a lifelong learner with expertise in crafting engaging user interfaces (UIs) and robust application programming interfaces (APIs). He shares knowledge and contributes to the growth of the community.",
  image: "https://weehong-me.b-cdn.net/Personal/profile.jpg",
  url: process.env.NEXT_PUBLIC_URL!,
};

export default function Home() {
  const { data }: ResumeDataProp = resume;

  return (
    <>
      <div className="container">
        <div className="panel">
          <LeftPanel
            title={data.name}
            subtitle={data.role}
            summary={data.summary}
            status={data.user_status}
          />
          <Suspense fallback={<Loading />}>
            <main className="right-panel">
              <Content />
            </main>
          </Suspense>
        </div>
      </div>
      <Script
        id="person-jsonld"
        key="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
