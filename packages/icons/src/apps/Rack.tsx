import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRack = ({
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
    <path d="M13.73 13.42h4.23l-.02-.12q-.02-.07-.05-.1l-2.84-6.66h-9.5l-2.83 6.67q-.03.02-.05.1t-.02.11h4.23L8.15 16h4.3zm6.88.39v6.46q0 .37-.24.6t-.63.27H.86q-.36 0-.6-.26t-.26-.6V13.8q0-.82.33-1.64l3.2-7.4q.12-.34.48-.58t.7-.22h11.18q.34 0 .7.22t.48.57l3.2 7.41q.34.82.34 1.64z" />
  </svg>
);
export default SvgRack;
