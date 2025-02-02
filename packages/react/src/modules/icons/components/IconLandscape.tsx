import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconLandscape = ({
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
      d="M4.222 5.037c-.895 0-1.222.555-1.222.792v12.675c0 .237.327.792 1.222.792h1.364l9.707-9.886a.987.987 0 0 1 1.414 0L21 13.782V5.829c0-.237-.328-.792-1.222-.792zM23 16.224V5.829C23 4.066 21.337 3 19.778 3H4.222C2.662 3 1 4.066 1 5.83v12.674c0 1.763 1.662 2.829 3.222 2.829h15.556c1.56 0 3.222-1.066 3.222-2.83v-2.279m-2 .439-5-5.093-7.585 7.726h11.363c.894 0 1.222-.555 1.222-.792zM8 8.093c-.552 0-1 .455-1 1.018a1.01 1.01 0 0 0 1 1.018c.552 0 1-.456 1-1.018a1.01 1.01 0 0 0-1-1.019M5 9.11c0-1.688 1.343-3.056 3-3.056s3 1.368 3 3.056-1.343 3.055-3 3.055-3-1.368-3-3.055"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconLandscape;
