import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconTextToSpeech = ({
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
      d="M12.6 21h-.3c-.4 0-.7-.2-1-.5l-4.9-4.1H3.1q-.9 0-1.5-.6c-.4-.4-.6-1-.6-1.5V9.7q0-.9.6-1.5c.4-.4 1-.6 1.5-.6h3.2l4.9-4.1c.3-.2.7-.4 1-.5.4-.1.8 0 1.1.2s.6.4.9.7c.2.3.3.7.3 1.1v14c0 .4-.1.8-.3 1.1s-.5.6-.9.8c-.037 0-.1.013-.18.03-.14.03-.33.07-.52.07M5 9.6H3v4.8h2zm2.3 5a.8.8 0 0 0-.3-.15V9.559a1 1 0 0 0 .4-.258l5.2-4.4-.1 14zM20 17.4c.1.1.3.1.5.1.3 0 .6-.2.8-.4 1.7-2.8 1.7-6.3 0-9.1-.3-.5-.9-.7-1.3-.4-.4.2-.6.8-.3 1.2 1.4 2.3 1.4 5.1 0 7.4-.3.4-.2.9.3 1.2m-3.6-3.6c-.4.3-.4.9 0 1.2.2.2.4.3.7.3.2 0 .5-.1.7-.3.7-.7 1.1-1.6 1.1-2.6s-.4-1.9-1.1-2.6c-.4-.3-1-.3-1.3 0-.4.3-.4.9 0 1.2.4.4.6.8.6 1.3-.1.7-.3 1.2-.7 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconTextToSpeech;
