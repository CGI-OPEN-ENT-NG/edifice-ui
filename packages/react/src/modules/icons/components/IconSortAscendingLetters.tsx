import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconSortAscendingLetters = ({
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
      d="M16.133 6.173c-.026.023-.133.118-.133.541v.715h2v-.715c0-.423-.107-.518-.133-.541C17.805 6.12 17.594 6 17 6s-.805.12-.867.173M20 6.714c0-.76-.203-1.521-.832-2.06C18.575 4.145 17.786 4 17 4s-1.575.145-2.168.654c-.629.539-.832 1.3-.832 2.06V11a1 1 0 1 0 2 0V9.429h2V11a1 1 0 1 0 2 0zM14 14a1 1 0 0 1 1-1h4a1 1 0 0 1 .832 1.555L16.87 19H19a1 1 0 1 1 0 2h-4a1 1 0 0 1-.832-1.555L17.132 15H15a1 1 0 0 1-1-1M3.293 16.293a1 1 0 0 1 1.414 0L7 18.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 4a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSortAscendingLetters;
