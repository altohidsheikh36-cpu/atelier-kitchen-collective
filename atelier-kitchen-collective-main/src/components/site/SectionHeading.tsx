import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  aside,
  className,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("grid gap-8 md:grid-cols-12 md:gap-12", className)}>
      <div className="md:col-span-7">
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        <As className={As === "h1" ? "text-h1" : "text-h2"}>{title}</As>
      </div>
      {intro || aside ? (
        <div className="md:col-span-5 md:pt-2">
          {intro ? <p className="body-lg max-w-prose">{intro}</p> : null}
          {aside ? <div className="mt-6">{aside}</div> : null}
        </div>
      ) : null}
    </Reveal>
  );
}
