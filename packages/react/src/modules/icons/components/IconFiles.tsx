import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconFiles = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.91 9.14v1.27H8.25a4.7 4.7 0 0 0-3.86 1.98L1.5 16.53V6.4a2.3 2.3 0 0 1 .77-1.69A2.68 2.68 0 0 1 4.11 4h3.73a2.68 2.68 0 0 1 1.84.71c.25.22.45.48.58.77s.2.6.2.92v.34h7.84c.7.01 1.35.27 1.84.71.49.45.76 1.06.77 1.7ZM8.25 11.92h14.47c.63 0 1 .68.64 1.18l-3.52 5.04a3.13 3.13 0 0 1-2.57 1.32H2.79c-.62 0-.99-.68-.64-1.18l3.53-5.04a3.13 3.13 0 0 1 2.57-1.32"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFiles;
