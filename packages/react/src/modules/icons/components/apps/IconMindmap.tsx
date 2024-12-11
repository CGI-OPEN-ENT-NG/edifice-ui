import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconMindmap = ({
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
      d="M24.05 17.27v4.3q0 .53-.39.92t-.91.38h-4.28q-.53 0-.91-.38t-.39-.92v-4.3q0-.53.39-.91t.9-.37h1.28v-2.57H12.9V16h1.27q.56 0 .92.37t.38.9v4.31q0 .53-.38.92t-.92.38H9.88q-.55 0-.91-.38t-.39-.92v-4.3q0-.53.39-.91t.91-.37h1.28v-2.57H4.3V16h1.28q.55 0 .91.37t.39.9v4.31q0 .53-.39.92t-.91.38H1.3q-.56 0-.92-.38T0 21.57v-4.3q0-.53.39-.91t.9-.37h1.28v-2.57q0-.7.5-1.22t1.23-.5h6.86V9.11H9.88q-.55 0-.91-.39t-.39-.89v-4.3q0-.53.39-.91t.91-.39h4.28q.55 0 .91.39t.39.91v4.3q0 .53-.39.9t-.9.38h-1.28v2.57h6.85q.7 0 1.23.5t.5 1.23V16h1.28q.55 0 .91.36t.38.9z"
    />
  </svg>
);
export default SvgIconMindmap;
