import { ArrowUpRight } from "lucide-react";

interface ExternalLinkProps {
  to: string;
  children: React.ReactNode;
  mode?: "button" | "link" | "rounded-button";
  button?: boolean;
  "aria-label"?: string;
}

export default function ExternalLink({
  children,
  to,
  mode = "link",
  "aria-label": ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={to}
      className={`inline-flex items-center gap-px ${mode === "link" ? "" : "button button--outline"} ${mode === "rounded-button" ? "rounded-full" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}{" "}
      <ArrowUpRight size={mode === "link" ? 14 : 16} aria-hidden="true" />
    </a>
  );
}
