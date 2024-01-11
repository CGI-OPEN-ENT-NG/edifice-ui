import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignRight = ({
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
      d="M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M10 12c0-.552.384-1 .857-1h10.286c.473 0 .857.448.857 1s-.384 1-.857 1H10.857c-.473 0-.857-.448-.857-1M4 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
    />
  </svg>
);
export default SvgAlignRight;
