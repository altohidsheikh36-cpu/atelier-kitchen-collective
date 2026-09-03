import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="shell pt-24 pb-4 md:pt-32 md:pb-6">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-h1 mt-4 max-w-4xl">{title}</h1>
        {intro ? <p className="body-lg mt-5 max-w-2xl">{intro}</p> : null}
        {children}
      </Reveal>
    </section>
  );
}
