import { Suspense } from "react";

import Script from "next/script";

import Form from "@/app/contact/form";
import Loading from "@/app/loading";
import LeftPanel from "@/components/Common/LeftPanel";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Me - Vernon Wee Hong KOH",
  description:
    "I can't wait to hear from you! Your feedback, questions, and suggestions are incredibly important to me. Whether you want to share your thoughts, ask a question, or simply say hello, I'm here and eager to connect. Fill out the form below with your name, email, and message, and I'll get back to you as soon as I can. Let's make this conversation awesome!",
  availableLanguage: ["English", "Chinese"],
  url: `${process.env.NEXT_PUBLIC_URL!}/contact`,
};

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="panel">
          <LeftPanel
            title="Contact Me"
            subtitle="Get In Touch with Vernon Wee Hong KOH"
          />
          <Suspense fallback={<Loading />}>
            <main className="right-panel">
              <div id="contact" className="flex flex-col gap-y-12">
                <p>
                  I can&apos;t wait to hear from you! Your feedback, questions,
                  and suggestions are incredibly important to me. Whether you
                  want to share your thoughts, ask a question, or simply say
                  hello, I&apos;m here and eager to connect. Fill out the form
                  below with your name, email, and message, and I&apos;ll get
                  back to you as soon as I can. Let&apos;s make this
                  conversation awesome!
                </p>
                <Form />
              </div>
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
