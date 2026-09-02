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
    <section className="shell pt-36 pb-14 md:pt-52 md:pb-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-h1 mt-6 max-w-4xl">{title}</h1>
        {intro ? <p className="body-lg mt-8 max-w-2xl">{intro}</p> : null}
        {children}
      </Reveal>
    </section>
  );
}
