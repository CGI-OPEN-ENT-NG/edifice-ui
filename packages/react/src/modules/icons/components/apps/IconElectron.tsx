import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconElectron = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M19.5 24.58c-3.63 0-8.2-2.33-11.93-6.06C1.78 12.7-.17 5.5 3.15 2.17A6.07 6.07 0 0 1 7.53.53c3.63 0 8.2 2.34 11.92 6.06 5.8 5.82 7.75 13.01 4.4 16.35a5.97 5.97 0 0 1-4.35 1.64M7.53 2.55c-1.28 0-2.26.34-2.96 1.04-2.43 2.45-.41 8.65 4.42 13.51 3.37 3.37 7.39 5.46 10.51 5.46 1.28 0 2.26-.34 2.94-1.04 2.45-2.45.43-8.65-4.4-13.5-3.37-3.38-7.39-5.47-10.51-5.47m0 22.03c-1.8 0-3.3-.58-4.36-1.64C-.17 19.6 1.78 12.41 7.58 6.6 11.3 2.86 15.88.53 19.5.53c1.8 0 3.3.58 4.36 1.64 3.34 3.34 1.39 10.53-4.4 16.35-3.73 3.73-8.3 6.06-11.93 6.06M19.5 2.55c-3.12 0-7.14 2.1-10.5 5.46-4.84 4.86-6.86 11.06-4.43 13.51.7.7 1.68 1.04 2.96 1.04 3.12 0 7.14-2.1 10.5-5.46 4.84-4.88 6.86-11.06 4.4-13.51-.67-.7-1.65-1.04-2.93-1.04"
    />
  </svg>
);
export default SvgIconElectron;
