import * as React from "react";

import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Row,
  Section,
  Tailwind,
} from "@react-email/components";

export default function Contact({
  name,
  email,
  content,
}: {
  name: string;
  email: string;
  content: string;
}) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[768px] rounded border border-solid border-slate-300 bg-[#051923] p-[20px]">
            <Heading className="text-center text-slate-200">
              Vernon Wee Hong KOH&apos;s Email
            </Heading>
            <Section className="mt-[32px]">
              <Row>
                <Column className="w-1/2 border border-solid border-slate-300 p-4 text-sm font-bold text-slate-200">
                  Name
                </Column>
                <Column className="border border-solid border-slate-300 p-4 text-sm text-slate-200">
                  {name}
                </Column>
              </Row>
              <Row>
                <Column className="w-1/2 border border-solid border-slate-300 p-4 text-sm font-bold text-slate-200">
                  Email
                </Column>
                <Column className="border border-solid border-slate-300 p-4 text-sm text-slate-200">
                  {email}
                </Column>
              </Row>
              <Row>
                <Column className="w-1/2 border border-solid border-slate-300 p-4 text-sm font-bold text-slate-200">
                  Content
                </Column>
                <Column className="border border-solid border-slate-300 p-4 text-sm text-slate-200">
                  {content}
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
