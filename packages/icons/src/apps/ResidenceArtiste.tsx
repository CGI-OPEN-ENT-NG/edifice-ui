import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgResidenceArtiste = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.21 12.7zm9.76 6.26c0-.03-.03-.05-.06-.03l-.89.8-.03.01h-.44l-1.24-1c-.03-.02-.06 0-.06.03v1c0 .02 0 .03-.03.03l-6.44.08c-.03 0-.05.04-.03.06A7.58 7.58 0 0 0 18.9 22.4c.02-.01.02-.05 0-.06-.38-.23-1.02-2.67-.94-3.38zm4.74-3.12a7.5 7.5 0 0 1-.19 1.69c0-.04-.02-.06-.04-.1-.95-2.88-4.2-.75-4.18-.73l-1.57 1.58-1.48-1.25h-.03l-.07-4.34h-2.18l-.38 2.03c.4.15.68.57.61 1.04a.97.97 0 0 1-1.9.1l-7.1.45a1.41 1.41 0 0 1-1.4 1.32c-.81 0-1.46-.67-1.42-1.5.04-.73.67-1.33 1.42-1.33.69 0 1.26.5 1.38 1.16l7.1-.44c.02-.19.1-.36.2-.5l-2-2.31H8.21c.14-.32.3-.62.49-.9l-2.58-3a2.7 2.7 0 0 1-1.76.55A2.79 2.79 0 0 1 1.8 6.8a2.7 2.7 0 1 1 4.59 1.78l2.52 2.91a7.61 7.61 0 0 1 4.49-3.04l.79-4.27a1.42 1.42 0 0 1 .5-2.76 1.41 1.41 0 0 1-.08 2.82h-.08l-.77 4.13a7.57 7.57 0 0 1 8.95 7.46zm-10.1-3.15H9.96l1.81 2.1a.99.99 0 0 1 .5-.13l.36-1.97zm7.54 1.53c0-.99-.66-1.79-1.48-1.79s-1.48.8-1.48 1.79c0 .98.66 1.78 1.48 1.78s1.48-.8 1.48-1.78z" />
  </svg>
);
export default SvgResidenceArtiste;
