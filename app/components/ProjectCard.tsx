import ExternalLink from "./ExternalLink";

export interface ProjectCardProps {
  title: string;
  year: number;
  sourceLink: string;
  previewLink: string;
  children: React.ReactNode;
}

export default function ProjectCard({
  title,
  year,
  sourceLink,
  previewLink,
  children,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-foreground/20 p-6 bg-foreground/5 -mx-6">
      <h2 className="text-3xl font-semibold">{title}</h2>
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
  );
}
