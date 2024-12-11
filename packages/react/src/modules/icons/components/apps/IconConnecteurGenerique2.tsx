import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconConnecteurGenerique2 = ({
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
    <path
      fill="currentColor"
      d="M17.17 12.99V6.54q0-.36-.24-.6t-.6-.26H9.88q-.57 0-.79.53-.24.55.2.93l1.92 1.93-7.17 7.16q-.26.27-.26.63t.26.6l1.37 1.37q.27.24.6.24t.6-.24l7.17-7.16 1.95 1.92q.24.26.6.26.14 0 .34-.07.5-.24.5-.8zm3.44-6.88V19q0 1.59-1.13 2.72t-2.74 1.15H3.87q-1.6 0-2.74-1.15T0 19V6.11Q0 4.52 1.13 3.4t2.74-1.15h12.87q1.6 0 2.74 1.15t1.13 2.72z"
    />
  </svg>
);
export default SvgIconConnecteurGenerique2;
