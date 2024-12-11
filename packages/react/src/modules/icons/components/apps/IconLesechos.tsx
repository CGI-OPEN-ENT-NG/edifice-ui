import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconLesechos = ({
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
      d="M21.43 2.29c-.5 0-.85.4-1.13 1.37 0 .05-.12.1-.24.1-.17 0-.22.04-.22.16 0 .15.05.17.22.17.24 0 .24-.17-.03 2.14-.12.96-.17 1.13-.31 1.15a.3.3 0 0 1-.24-.12c-.1-.16-.41-.16-.48 0-.05.12-.99.12-7.74.12h-7.7v.44h7.72c4.93 0 7.77.02 7.84.1.21.11.6.09.84-.03.1-.05.43-.07.72-.07.53.02.55 0 .55-.22 0-.2-.04-.21-.38-.21h-.39l.12-.34c.08-.2.17-.84.24-1.44.2-1.47.2-1.5.44-1.52.33-.07.57.02.57.2 0 .09-.12.64-.26 1.2l-.27 1.08c0 .03.17.04.36.02l.37-.02.19-.6c.19-.65.5-1.3.65-1.4.04-.02.16 0 .24.07.14.07.21.07.36-.07.31-.27.19-.72-.2-.72-.09 0-.3.14-.48.31-.26.3-.28.3-.24.1.17-.53.17-.5-.16-.5-.2 0-.46.04-.63.07-.17.04-.29.04-.29 0 0-.03-.1-.08-.21-.08-.2 0-.22-.02-.17-.31.14-.91.2-.99.38-.6.12.29.32.36.48.22.34-.3 0-.77-.52-.77m-7.94.1c-.24 0-1.03.19-1.08.3-.03.08.05.1.14.1s.2.05.22.1c.05.05 0 .74-.1 1.56-.12 1.16-.17 1.44-.24 1.37-.1-.07-.19-.04-.36.1-.48.38-.72.2-.72-.58 0-.57.2-1.15.36-1.15.05 0 .2.1.31.19.17.14.24.17.36.1a.34.34 0 0 0 0-.58c-.6-.43-1.63.26-1.77 1.2-.03.22-.1.39-.15.39s-.19.16-.29.33c-.21.39-.43.48-.91.44-.34-.05-.39-.17-.29-1.01l.07-.56.36.03c.32.02.36.07.39.26 0 .17.07.24.17.24.12 0 .16-.1.21-.53.03-.29.05-.62.05-.74 0-.27-.24-.24-.31.02-.05.27-.27.39-.6.39h-.24l.07-.53.05-.7c0-.12.07-.14.36-.14.45 0 .65.1.72.4.02.17.1.27.17.27.12 0 .14-.1.14-.5v-.53h-1.3c-1.1 0-1.3.02-1.3.14 0 .07.05.12.12.12.3 0 .31.2.15 1.7-.15 1.45-.24 1.76-.5 1.76-.06 0-.13.08-.13.15 0 .1.2.12 1.37.1l1.35-.03.12-.39c.05-.21.1-.33.1-.24.02.08.11.27.23.41.37.41.9.36 1.45-.14l.24-.24v.65l.31-.05c.2-.05.36-.07.39-.1l.1-.64c.04-.49.11-.68.33-1 .31-.42.55-.52.48-.18a8.2 8.2 0 0 0-.2 1.8c.1.24.42.22.8-.07l.36-.27.27.27c.67.58 1.63.1 1.92-1.01l.1-.31.48.4c.46.39.55.65.29.7-.1.03-.3-.07-.43-.21-.32-.27-.56-.2-.6.16-.03.3.26.5.72.5.26 0 .38-.06.67-.33.24-.24.34-.4.34-.6 0-.4-.08-.5-.53-.84-.24-.17-.44-.36-.44-.43 0-.22.2-.24.46-.05.29.21.5.12.5-.22 0-.57-1-.45-1.37.15l-.14.24-.1-.24a.84.84 0 0 0-.4-.41c-.82-.39-1.78.43-1.8 1.54 0 .33-.03.43-.18.5-.19.1-.19.1-.14-.24.05-.21.1-.65.12-.98.05-.53.02-.65-.1-.75-.19-.17-.53-.07-.93.31l-.37.34.12-1.06c.08-.6.1-1.1.05-1.13 0-.02-.02-.02-.07-.02m-11.18.33c-.65 0-.82.02-.82.12 0 .07.07.14.17.17.21.07.21.34.05 1.95-.15 1.2-.22 1.4-.5 1.4-.08 0-.15.04-.15.11 0 .12.19.15 1.22.15h1.25l.07-.32c.05-.29.22-.43.22-.19 0 .07.1.22.22.34.16.14.26.19.6.14.24-.02.5-.14.7-.26.16-.15.28-.2.28-.15 0 .2.41.44.72.44.3 0 .41-.08.7-.34.24-.24.31-.41.31-.6 0-.41-.04-.5-.5-.84-.24-.17-.43-.37-.43-.44 0-.21.19-.24.43-.05.29.2.39.2.53-.07.05-.14.05-.21-.1-.36-.48-.46-1.4.1-1.4.87 0 .24.1.33.78.89.21.17.21.43 0 .48-.07.02-.27-.07-.41-.2-.15-.14-.34-.21-.39-.19-.07.03-.16.03-.19-.02s-.17 0-.31.12c-.31.27-.63.29-.77.05-.14-.3-.1-.43.36-.65.63-.31.87-.58.87-.94 0-.55-.58-.74-1.23-.4-.48.23-.87.88-.87 1.44 0 .12-.02.19-.07.19-.05-.03-.19.14-.33.33-.24.32-.34.37-.58.37-.17 0-.31-.05-.34-.12-.02-.05.03-.77.12-1.57.15-1.42.2-1.58.5-1.58.05 0 .1-.08.1-.15 0-.1-.14-.12-.82-.12zm2.64 1.42c.2 0 .22.46.03.67-.1.1-.24.22-.32.24-.12.07-.14.05-.14-.1 0-.28.27-.81.43-.81m11.23.02c.1 0 .2.05.27.2.14.3.1 1.39-.1 1.68-.31.48-.57.12-.57-.75 0-.65.19-1.1.4-1.13m3.2 1.52a.6.6 0 0 0-.21.07c-.3.17-.34.48-.15.7.2.19.46.21.65.02.24-.21.22-.53-.05-.7-.12-.07-.16-.1-.24-.1zM12.1 8.2c-1.57 0-3.18.46-4.6 1.42a7.98 7.98 0 0 0-3.3 7.72 8.32 8.32 0 0 0 6.19 6.57c.4.1.62.16.65.19h1.83l1.13-.3a9.3 9.3 0 0 0 3.7-2.08 7.98 7.98 0 0 0-.07-11.23A7.8 7.8 0 0 0 12.1 8.2m-.08.99c1.64 0 1.9.05 2.96.55a6.97 6.97 0 0 1 3.87 8.08 7.06 7.06 0 0 1-3.87 4.7c-.8.35-1.32.45-2.7.5-.93.02-1.9 0-2.13-.1-6.23-2.07-6.9-10.32-1.1-13.15 1.07-.53 1.32-.58 2.97-.58m0 .36c-1.37 0-1.78.07-2.64.48-4.16 1.95-5.32 7.17-2.26 10.44a6 6 0 0 0 2.72 1.92c1.3.48 3.8.39 4.95-.2 5.22-2.61 5.22-9.59 0-12.09-1.03-.5-1.32-.55-2.77-.55m-2.16 2.79c.55-.02 1.1.1 1.49.34l.55.33v2.72c0 2.48-.02 2.72-.29 2.57a6.2 6.2 0 0 0-1.44-.19c-.62-.05-1.37 0-1.66.1l-.53.19v-5.56l.63-.26c.38-.17.82-.24 1.25-.24m4.4 0c.8 0 1.56.22 1.83.6.07.1.14 1.4.14 2.86 0 2.46-.02 2.65-.31 2.5a6.2 6.2 0 0 0-1.44-.19c-.63-.05-1.38 0-1.66.1l-.53.19v-5.56l.62-.26c.39-.17.9-.24 1.35-.24m-7.1 1.32.05 2.65.08 2.64h1.87c1.13 0 1.88.07 1.88.2 0 .09.48.16 1.08.16.58 0 1.06-.07 1.06-.17 0-.12.72-.19 1.8-.19h1.78l.05-2.64.07-2.65.03 2.74.04 2.74h-1.68c-1.35 0-1.7.05-1.78.27-.1.2-.43.26-1.47.26-1.08 0-1.34-.04-1.34-.26s-.32-.27-1.8-.27h-1.8l.03-2.74z"
    />
  </svg>
);
export default SvgIconLesechos;
