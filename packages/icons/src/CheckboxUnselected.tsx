import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckboxUnselected = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.5 5.5h-13v13h13v-13Zm-13-2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-13Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.4 12a1.1 1.1 0 0 1 1.1-1.1h7a1.1 1.1 0 0 1 0 2.2h-7A1.1 1.1 0 0 1 7.4 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckboxUnselected;
