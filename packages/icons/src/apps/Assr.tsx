import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssr = ({
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
    <path d="M3.77 15.22c-.02 0-.14-.02-.3-.02-.37-.02-.63-.1-1.14-.29-.48-.19-.74-.36-1.06-.7a2.54 2.54 0 0 1-.7-1.03c-.07-.24-.09-.36-.09-.74 0-.53.1-.92.39-1.47.26-.5.52-.87.93-1.27a8.9 8.9 0 0 1 4.64-2.26c.68-.1 1.98-.05 2.6.1.82.18 1.52.64 2 1.31.17.24.36.7.36.87s.02.17.43.07c.36-.07.44-.07 1.66-.07 1.25.02 1.3.02 1.5.1.11.04.2.1.2.12 0 .1.18.07.49-.03.5-.17.72-.19 1.95-.19 1.42 0 1.63.02 1.94.34.08.1.15.14.17.14l.24-.1c.24-.11.6-.23.94-.28.39-.08 1.2-.08 1.5 0 .11.02.3.04.42.04.1 0 .2.03.22.05 0 0 .05.03.12.03.05 0 .12.02.2.07l.16.1a.5.5 0 0 1 .17.16c.1.17.12.6 0 .9-.24.64-.39.79-.99.98-.21.07-.33.1-.86.1-.41 0-.65 0-.7.04-.12.05-.17.12-.58 1.16-.45 1.2-.48 1.22-.98 1.54-.36.19-.5.23-.99.23-.38 0-.43 0-.62-.1-.12-.06-.24-.16-.32-.2l-.1-.13-.19.1c-.3.14-.67.29-.86.31-.24.03-2.79.03-2.94 0-.12-.02-.4-.17-.45-.24-.03-.02-.27.03-.34.1-.02.02-.14.05-.26.1-.2.07-.44.07-4.48.07-2.35.02-4.28.02-4.28 0zm8.35-.77c.94-.19 1.75-.9 1.75-1.53 0-.17-.02-.27-.11-.39-.2-.34-.51-.46-1.23-.46-.36 0-.5 0-.6-.04-.17-.1-.2-.24-.07-.41l.1-.08 1.1-.02c1.1-.02 1.13-.02 1.32-.12.12-.05.27-.14.34-.21.19-.22.19-.49-.03-.58-.04-.03-.6-.03-1.25-.03-1.32 0-1.41 0-1.92.24-.34.17-.65.46-.87.8-.16.24-.16.26-.16.55 0 .24.02.29.12.43.16.27.38.34 1.08.39.62.05.74.1.74.26 0 .1-.16.3-.29.32-.04.02-1.8.02-3.94.02l-3.85-.02-.29-.1c-.48-.14-.93-.48-1.1-.86-.2-.41-.17-.8.07-1.3.17-.39.4-.68.77-.99 1.4-1.15 3.6-1.54 4.76-.8.24.17.53.54.6.73.12.43-.02 1.03-.34 1.32-.24.24-.72.34-.84.17-.12-.12-.1-.24.15-.7.12-.24.24-.48.24-.55 0-.27-.39-.58-.85-.67-.33-.1-1.2-.08-1.63.04-.91.24-1.83.92-2.14 1.57-.12.21-.12.29-.12.5 0 .31.05.43.22.65.28.29.67.4 1.25.4.45 0 .7-.04 1.15-.16l.31-.1.3.08c.4.12.62.12 1.12.07a3.37 3.37 0 0 0 1.93-.91l.16-.2c.1-.1.34-.6.46-.91.1-.34.14-.72.07-1.01a2.4 2.4 0 0 0-.4-.77c-.51-.53-1.23-.8-2.34-.84a7.2 7.2 0 0 0-3.22.65.7.7 0 0 1-.22.07 6.5 6.5 0 0 0-2.36 1.83 4 4 0 0 0-.6 1.2c-.19.72.08 1.46.63 1.9.1.05.17.12.17.12.02.05.38.21.6.29.2.07.7.19 1 .21.06 0 1.89.03 4.05.03 3.37 0 3.97 0 4.2-.08zm-6.64-2.4c-.12-.02-.33-.2-.38-.34-.12-.26-.03-.5.29-.74.36-.3 1-.39 1.32-.2.1.05.2.13.22.2.04.1.04.1-.1.4-.22.42-.31.51-.6.6-.22.08-.6.13-.75.08m10.78 2.43a2.6 2.6 0 0 0 1.25-.58c.16-.12.4-.43.5-.62.1-.22.1-.53-.02-.72-.15-.34-.53-.49-1.25-.49-.27 0-.5 0-.56-.02-.12-.07-.19-.2-.16-.31.04-.2.12-.2 1.27-.22l1.1-.02.25-.12c.4-.2.57-.55.36-.72-.1-.07-.15-.07-1.3-.07-1.35 0-1.5.02-1.97.24-.34.19-.75.57-.92.9-.21.4-.17.75.15 1.02.19.17.45.24.84.24.43 0 .7.05.77.12s.1.2.02.29c-.07.17-.24.19-1.27.19h-.99l-.22.12c-.3.14-.43.29-.43.5 0 .17.05.25.24.3.17.02 2.1.02 2.34-.03m2.83-.07c.2-.1.36-.3.46-.5l.43-1.07c.22-.55.39-.93.46-.98.05-.05.17-.15.29-.22l.2-.1.76-.02c.77-.02.8-.02 1.01-.12.34-.17.5-.4.43-.62-.07-.17-.26-.22-1.15-.2-.7.03-.8.03-1.1.13-.53.16-1.06.48-1.42.84-.2.21-.32.4-.44.7l-.14.33-.22.53c-.07.24-.17.46-.17.5-.02.03-.1.2-.14.34-.1.27-.07.39.05.48.1.08.55.05.7-.02z" />
  </svg>
);
export default SvgAssr;
