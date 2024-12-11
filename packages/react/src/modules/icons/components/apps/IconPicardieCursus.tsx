import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconPicardieCursus = ({
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
      d="m13.29 13.55.85-3.44h-3.4l-.86 3.44h3.4zm10.3-6.76-.76 3a.43.43 0 0 1-.42.33h-4.38l-.86 3.43h4.17c.13 0 .26.06.34.16s.12.24.08.37l-.76 3a.42.42 0 0 1-.41.33H16.2l-1.08 4.4a.44.44 0 0 1-.42.32h-3a.48.48 0 0 1-.35-.16.47.47 0 0 1-.08-.38l1.05-4.18h-3.4l-1.1 4.4a.44.44 0 0 1-.41.32H4.39a.47.47 0 0 1-.33-.16.47.47 0 0 1-.08-.38l1.04-4.18H.86a.45.45 0 0 1-.34-.16.47.47 0 0 1-.08-.38l.75-3a.43.43 0 0 1 .42-.32h4.38l.86-3.44H2.68a.45.45 0 0 1-.33-.16.42.42 0 0 1-.08-.37l.75-3a.42.42 0 0 1 .41-.33h4.39l1.08-4.4a.45.45 0 0 1 .43-.32h3c.13 0 .26.07.34.17s.1.24.08.37L11.7 6.25h3.4l1.1-4.4a.45.45 0 0 1 .42-.32h3c.13 0 .26.07.34.17s.1.24.08.37L19 6.25h4.16c.14 0 .26.07.34.16.08.11.1.25.08.38z"
    />
  </svg>
);
export default SvgIconPicardieCursus;
