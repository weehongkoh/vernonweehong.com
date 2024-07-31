import React from "react";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
