import Image from "next/image";
import ExternalLink from "./ExternalLink";

export interface ProjectCardProps {
  title: string;
  year: number;
  sourceLink: string;
  previewLink: string;
  image: string;
  children: React.ReactNode;
}

export default function ProjectCard({
  title,
  year,
  sourceLink,
  previewLink,
  image,
  children,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-foreground/20 bg-foreground/5 -mx-6 overflow-hidden">
      <div className="w-full h-48 relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 672px) 100vw, 672px"
          className="object-cover brightness-50"
        />
      </div>
      <div className="px-6 pt-6 pb-0">
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      <div className="flex flex-col gap-3 px-6 pb-6">
        <div>Year: {year}</div>
        <div className="flex flex-col gap-3">{children}</div>
        <div className="flex gap-3 mt-2">
          <ExternalLink
            to={sourceLink}
            mode="button"
            aria-label={`${title} source`}
          >
            Source
          </ExternalLink>
          <ExternalLink
            to={previewLink}
            mode="button"
            aria-label={`${title} preview`}
          >
            Preview
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
