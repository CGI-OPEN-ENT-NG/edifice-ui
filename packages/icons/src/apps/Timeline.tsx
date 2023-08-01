import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTimeline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.73 12.56q0-1.42-.99-2.43t-2.42-1.01-2.43 1-1.01 2.44 1 2.42T10.33 16t2.42-1 1-2.43zm6.88-1.47v2.98q0 .17-.1.31t-.26.17l-2.5.39q-.24.72-.5 1.22.45.65 1.41 1.85.15.15.15.32t-.12.31q-.37.5-1.33 1.47t-1.27.94q-.17 0-.34-.12l-1.85-1.45q-.6.32-1.23.5-.21 1.84-.38 2.5-.1.4-.48.4H8.83q-.2 0-.34-.13t-.14-.29L7.96 20q-.65-.22-1.2-.5l-1.9 1.44q-.15.12-.34.12t-.34-.15q-1.68-1.54-2.2-2.26-.1-.12-.1-.31 0-.15.12-.3.19-.28.67-.88t.72-.96q-.36-.68-.55-1.32L.38 14.5q-.16-.03-.26-.17T0 14.02v-2.98q0-.17.12-.31t.24-.17l2.5-.38q.2-.6.53-1.23-.55-.77-1.44-1.85-.15-.17-.15-.34 0-.12.12-.29.36-.48 1.33-1.44t1.27-.96q.17 0 .36.12l1.85 1.44q.58-.31 1.2-.5.22-1.83.41-2.5.08-.39.48-.39h2.99q.16 0 .3.12t.18.29l.36 2.48q.67.21 1.22.48l1.9-1.42q.12-.12.32-.12.17 0 .33.12 1.74 1.6 2.22 2.28.1.12.1.29t-.1.31q-.22.3-.7.9t-.72.95q.36.68.55 1.3l2.45.39q.17.02.3.16t.09.32z" />
  </svg>
);
export default SvgTimeline;
