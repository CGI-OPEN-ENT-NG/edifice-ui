import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconMoodle = ({
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
    <path
      fill="currentColor"
      d="M16.96 7.87c-1.7 0-2.88.4-3.52 1.21a3.2 3.2 0 0 0-.58-.49 6.8 6.8 0 0 1-2.05 2.13c.59.3.89.96.89 1.98v6.85h3.49V12.7c0-1.44.6-2.15 1.78-2.15s1.77.71 1.77 2.15v6.85h3.5V12.3c0-1.5-.53-2.63-1.57-3.4a6.04 6.04 0 0 0-3.7-1.02zm-12.2 3.49c-.05.3-.08.6-.08.93v7.26h3.5V12.7c0-.39.04-.72.12-1a7.2 7.2 0 0 1-3.54-.34m6.6-4.21 3.47-2.54-.04-.15c-6.26.76-9.1 1.3-14.5 4.43l.06.14h.43c-.04.44-.11 1.5-.02 3.1-.6 1.74-.02 2.91.53 4.2a12.5 12.5 0 0 0-.33-4.24c-.09-1.6-.02-2.64.02-3.05l3.57.03a15 15 0 0 0 .12 2.17l-.01-.07c3.2 1.12 6.4 0 8.1-2.77a14 14 0 0 0-1.4-1.26z"
    />
  </svg>
);
export default SvgIconMoodle;
