import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBanquesavoir = ({
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
    <path d="M22.8 4.21c-.34 0-.77.1-1.09.29-.62.39-.81 1.06-.81 3 0 2.34-.17 2.77-1.35 3.08-.58.17-.4.63.26.82.37.12.7.34.82.53.1.2.22 1.25.27 2.45.1 2.26.24 2.72 1.1 3.15.2.12.58.2.87.2.39 0 .5-.05.5-.32 0-.21-.12-.29-.36-.29-.77 0-.93-.45-1.03-2.8-.1-2.32-.2-2.63-.91-3.14l-.34-.24.4-.3c.66-.51.85-1.19.85-2.94 0-2.1.17-2.67.82-2.84.26-.07.5-.24.53-.39.04-.19-.2-.28-.53-.26zm-14.4.31c-1.21 0-1.16-.04-1.16 2.1 0 1.58.02 1.9.21 1.9s.24-.32.24-1.86V4.81h.6c1.04 0 1.23.34 1.23 2.17 0 .91.07 1.53.17 1.53s.14-.64.14-1.63c0-1.52-.02-1.64-.38-2-.3-.29-.53-.36-1.06-.36zm7.6 0c-.1 0-.18.7-.18 1.83v1.83l-.53.12c-.38.07-.64.02-.91-.14-.36-.24-.39-.34-.43-1.9-.05-2-.32-2.24-.39-.37-.07 1.54.15 2.36.63 2.58.4.21.62.21 1.37.1l.58-.1V6.5c0-1.23-.05-1.98-.15-1.98zm2.06 0c-1.2 0-1.3.15-1.3 2 0 .82.02 1.61.1 1.75.07.2.3.24 1.15.24.67 0 1.03-.07.96-.16-.05-.08-.45-.15-.91-.15h-.84V6.66h.91c.53 0 .94-.07.94-.14 0-.1-.43-.17-.94-.17h-.94l.1-1.44.89-.05c1.1-.07 1-.34-.12-.34zm-15.87 0-.3.03-.6.05-.02 1.9c-.04 1.42 0 1.94.15 2.04.31.22 1.66.02 2-.29s.38-1.3.04-1.59c-.19-.16-.19-.21 0-.4.3-.3.3-1.04 0-1.35-.29-.27-.7-.39-1.27-.39zm9.43.03c-.08 0-.15 0-.2.02-.91.15-1.13.53-1.1 2 0 1.34.12 1.68.8 1.92.33.12.4.27.4.63 0 .26.07.48.17.48.07 0 .14-.22.14-.48 0-.34.1-.5.39-.6.48-.2.7-.6.8-1.52.18-1.49-.4-2.48-1.4-2.45zm-6.2 0c-.42 0-.85.1-1.02.26-.1.1-.2.92-.22 1.95-.04 1.52-.02 1.76.2 1.76.19 0 .24-.2.24-.85v-.84H6.3v.84c0 .46.07.85.17.85.07 0 .14-.7.14-1.78 0-1.71 0-1.76-.38-2-.2-.12-.5-.2-.82-.2zm-3.23.26c1.03 0 1.56.82.86 1.3-.19.15-.57.24-.86.24-.48 0-.5 0-.5-.77 0-.74.02-.77.5-.77zm9.35.03c.15 0 .3.04.5.16.51.27.56.41.56 1.62 0 1-.02 1.13-.4 1.41-.44.37-.46.37-.92.17-.5-.19-.67-.62-.67-1.68 0-.8.07-1.01.38-1.32.24-.24.39-.37.55-.37zm-6.13 0c.12 0 .27.02.41.07.34.12.4.24.46.8l.04.64h-1.7v-.6c0-.53.07-.65.38-.8.15-.07.27-.09.41-.11zM1.68 6.66h.63c.91 0 1.37.65.89 1.28-.12.14-.48.31-.84.36l-.68.1V6.65zm11.69 2.17c-.07 0-.14.24-.14.53 0 .5-.05.53-.5.53-.3 0-.66.12-.85.24-.7.48-.6 2.26.12 2.64.21.12.58.17.82.12s.5-.07.57-.07c.08 0 .15-.92.15-2 0-1.22-.07-2-.17-2zm2.07 0c-1.2 0-1.3.14-1.3 2 0 .81.05 1.6.1 1.75.07.2.33.24 1.15.24.67 0 1.03-.07.99-.17-.05-.07-.49-.14-.94-.14h-.85v-1.54h.94c.5 0 .92-.07.92-.15 0-.1-.41-.16-.94-.16h-.92l.03-.72.05-.73.89-.04c1.13-.08 1.03-.34-.12-.34zm2.74 0h-.15c-.52 0-1.13.19-1.3.48-.28.53-.02.98.9 1.61 1.34.89 1.27 1.59-.12 1.59-.75 0-1.01.21-.49.36.41.12 1.4 0 1.66-.22.12-.1.22-.43.22-.77 0-.55-.05-.62-.91-1.22-.99-.68-1.18-1.09-.6-1.4.19-.1.57-.12.93-.07.46.07.6.05.56-.1-.08-.16-.37-.26-.7-.26zm-5.36 1.37c.38 0 .4.02.4 1.13 0 .91-.04 1.15-.23 1.23-.77.28-1.16-.13-1.16-1.2 0-.92.22-1.16.99-1.16zm-6.06 2.9-1.09.06c-1 .04-1.13.07-1.41.48-.27.33-.34.65-.34 1.56.02 1.18.22 1.64.91 1.92.17.08.56.1.87.08.29-.05.65-.08.8-.08.23 0 .26-.21.26-2.02v-2zm4.69 0c-.34 0-.68.15-.92.4-.33.33-.38.5-.38 1.53 0 1.28.16 1.8.67 2.07.46.24 1.35.07 1.66-.29.6-.72.53-2.7-.12-3.32a1.22 1.22 0 0 0-.91-.38zm-4.4 0a.05.05 0 0 0-.05.06c-.1.07.91 3.68 1.1 3.99.12.21.49.12.63-.15.29-.52 1.15-3.72 1.06-3.82-.17-.17-.24-.02-.72 1.64-.27.89-.53 1.7-.6 1.8-.08.12-.32-.5-.63-1.54-.43-1.49-.63-1.97-.8-1.97zm6.32.03c-.1 0-.14.75-.14 2 0 1.22.04 2 .14 2s.17-.77.17-2c0-1.25-.07-2-.17-2zm-10.7 0H2.5c-.53 0-1.13.2-1.27.48-.3.53-.05.99.89 1.61 1.32.9 1.27 1.6-.15 1.6-.72 0-1 .2-.48.35.44.12 1.42 0 1.66-.21.15-.1.24-.44.24-.77 0-.56-.07-.65-.94-1.23-.98-.67-1.15-1.08-.57-1.4.19-.09.57-.11.93-.07.46.08.58.05.53-.1-.04-.16-.33-.26-.67-.26zm15.65 0h-.14c-.53 0-1.13.2-1.27.48-.3.53-.05.99.89 1.61 1.32.9 1.27 1.6-.15 1.6-.72 0-1 .2-.48.35.43.12 1.42 0 1.66-.21.12-.1.24-.44.24-.77 0-.56-.07-.65-.94-1.23-.98-.67-1.15-1.08-.57-1.4.16-.09.57-.11.9-.07.47.08.61.05.56-.1-.05-.16-.33-.26-.7-.26zm-4.25.07-.05 1.95c-.02 1.69 0 1.98.2 1.98s.23-.2.23-.85c0-.8.03-.86.36-.86.32 0 .5.19.9.86.28.46.6.85.69.85.26 0 .26-.08-.24-.9l-.46-.72.36-.33c.44-.41.5-1.2.17-1.69-.17-.24-.4-.29-1.2-.29h-.96zm.74.22c1.1 0 1.71.87 1.04 1.42-.2.14-.6.29-.87.29h-.53v-.87c0-.8.03-.84.36-.84zm-3.39.03c.17 0 .36.1.63.3.36.3.4.42.4 1.43 0 .89-.07 1.18-.28 1.37-.15.14-.5.26-.75.26-.7 0-.96-.45-.96-1.66 0-.81.05-1.03.36-1.34.24-.24.41-.34.6-.36zm-5.89 0c.05 0 .1 0 .14.02l.56.05.05 1.63.04 1.66h-.67c-1 0-1.27-.36-1.27-1.73 0-.94.04-1.1.38-1.37.22-.17.48-.27.77-.27zm17.07 4.9-.19.39h.17l.29-.39h-.27zm-9.93.2v.18h.22v-.19h-.22zm-8.22 0v1.58h.98v-.2h-.76v-1.39h-.22zm14.09.04v.36h-.12v.15h.12v.64c0 .15.02.25.1.32.07.05.14.1.28.1l.1-.03c.05 0 .1 0 .12-.02v-.17c-.02 0-.05 0-.07.02h-.24c-.02-.02-.05-.05-.05-.07-.02-.02-.02-.07-.02-.1-.03-.04-.03-.1-.03-.14v-.55h.41v-.15h-.4v-.36h-.2zm-12.4.31a.58.58 0 0 0-.42.17.6.6 0 0 0-.16.46c0 .21.04.36.16.46.1.12.27.16.46.16l.22-.02.21-.07v-.22H6.6c-.03.03-.1.05-.17.1-.07.02-.17.05-.24.05l-.17-.03c-.05-.02-.1-.05-.12-.1-.05-.02-.07-.07-.1-.11s-.04-.12-.04-.2h.89v-.12a.5.5 0 0 0-.15-.38c-.07-.1-.19-.15-.36-.15zm5.7 0a.63.63 0 0 0-.42.17c-.1.12-.14.27-.14.46s.05.34.14.46c.12.12.24.16.41.16s.29-.04.41-.16c.1-.12.14-.27.14-.46s-.04-.34-.14-.46a.63.63 0 0 0-.4-.17zm3.72 0c-.07 0-.15.03-.22.05s-.12.07-.19.12v-.12h-.2v1.61h.2v-.5l.17.07.17.02c.07 0 .12-.02.19-.04.07-.03.12-.08.17-.12s.1-.12.12-.22c.02-.07.02-.17.02-.24 0-.2-.02-.36-.12-.46-.07-.12-.17-.16-.31-.16zm5.58 0c-.08 0-.12.03-.2.05s-.12.07-.16.12c-.05.05-.1.12-.12.2s-.05.14-.05.26c0 .17.05.31.12.43a.47.47 0 0 0 .55.1c.05-.03.12-.05.17-.1v.24l-.07.1c-.02.03-.05.05-.1.07l-.17.02-.21-.02-.15-.05h-.02v.2l.2.04h.16c.2 0 .34-.05.43-.14.1-.07.15-.24.15-.44v-1.03h-.2l-.02.05c-.05-.05-.1-.05-.14-.07s-.1-.03-.17-.03zm1.4 0a.58.58 0 0 0-.42.17.7.7 0 0 0-.16.46c0 .21.07.36.16.46a.6.6 0 0 0 .46.16l.22-.02.21-.07v-.22l-.19.1c-.07.02-.14.05-.24.05l-.17-.03c-.05-.02-.1-.05-.12-.1-.05-.02-.07-.07-.1-.11s-.02-.12-.02-.2h.87v-.12a.61.61 0 0 0-.12-.38.5.5 0 0 0-.39-.15zm-14.44 0c-.1 0-.14.03-.21.05a.18.18 0 0 0-.15.07c-.04.03-.07.08-.1.12-.02.03-.02.08-.02.12 0 .1.03.15.05.22.05.05.12.07.24.12.03 0 .07 0 .12.02.05 0 .07 0 .1.03.1 0 .14.02.17.05s.02.07.02.12c0 .04-.02.1-.07.12s-.12.04-.2.04c-.07 0-.14-.02-.21-.04-.1-.03-.14-.08-.22-.12H7.6v.24l.2.07.23.02c.17 0 .3-.05.36-.1.1-.07.15-.16.15-.28 0-.08-.03-.15-.08-.2s-.12-.1-.21-.12c-.03 0-.07 0-.12-.02-.05 0-.07 0-.12-.02-.07 0-.12-.03-.14-.05s-.05-.07-.05-.12c0-.05.02-.1.07-.12s.12-.05.2-.05c.06 0 .13.02.2.05s.13.05.2.1V19a1.65 1.65 0 0 0-.2-.07c-.07 0-.14-.03-.19-.03zm1.13 0-.21.03c-.1.02-.15.02-.17.05v.19c.07-.03.14-.05.2-.05.06-.02.11-.02.18-.02h.12l.1.02.07.07c0 .05.03.07.03.12v.03l-.34.02-.27.07a.24.24 0 0 0-.14.12.39.39 0 0 0 .05.5c.07.08.17.1.26.1.05 0 .12 0 .15-.02l.12-.02c.02-.03.04-.05.1-.05l.06-.07v.14h.2v-.82c0-.07-.03-.12-.05-.2 0-.04-.05-.09-.1-.11l-.14-.07-.22-.03zm7.48 0-.21.03c-.08.02-.12.02-.17.05v.19h.02a.45.45 0 0 1 .2-.05c.04-.02.12-.02.16-.02h.12l.1.02c.05.02.07.05.07.07.03.05.03.07.03.12v.03l-.32.02-.26.07c-.07.02-.12.07-.17.12-.02.07-.05.15-.05.22 0 .12.03.21.1.29s.17.1.29.1c.04 0 .1 0 .14-.03l.12-.02c.02-.03.05-.05.07-.05l.07-.07v.14h.2v-.82c0-.07 0-.12-.03-.2-.02-.04-.05-.09-.1-.11l-.16-.07c-.05 0-.12-.03-.22-.03zm3.08 0-.21.03c-.08.02-.12.02-.17.05v.19h.02c.07-.03.12-.05.2-.05.07-.02.11-.02.16-.02h.12l.12.02c.03.02.05.05.05.07.02.05.02.07.02.12v.03l-.31.02-.26.07a.48.48 0 0 0-.17.12c-.03.07-.05.15-.05.22 0 .12.02.21.12.29.07.07.14.1.26.1.05 0 .1 0 .15-.03l.12-.02c.02-.03.05-.05.07-.05.05-.03.07-.05.07-.07v.14h.22v-.82c0-.07-.03-.12-.05-.2-.02-.04-.05-.09-.1-.11l-.16-.07c-.05 0-.12-.03-.22-.03zm-9.81.05.48 1.18h.2l.47-1.18h-.21l-.36.94-.37-.94h-.21zm2.72 0v1.18h.19v-1.18h-.2zm.57 0v1.18h.2v-.84c.04-.05.12-.07.16-.12.05-.03.12-.03.2-.03h.1c.02 0 .04 0 .06.03h.03v-.22h-.15c-.07 0-.14 0-.19.03-.07.02-.12.07-.21.14v-.17h-.2zm4.33 0v1.18h.22v-.84c.05-.05.1-.07.17-.12.04-.03.1-.03.16-.03h.1c.02 0 .05 0 .1.03v-.22h-.15c-.07 0-.12 0-.19.03a.79.79 0 0 0-.2.14v-.17h-.2zm-11.5.12c.13 0 .2.03.25.1.05.05.1.12.1.24h-.7c.02-.1.05-.17.12-.24.05-.07.14-.1.24-.1zm16.43 0c.1 0 .17.03.24.1.05.05.07.12.07.24h-.67c0-.1.05-.17.1-.24.07-.07.14-.1.26-.1zm-10.7 0c.1 0 .2.05.24.12.07.07.1.2.1.34s-.03.26-.1.34c-.05.07-.14.12-.24.12s-.2-.05-.24-.12c-.07-.08-.1-.2-.1-.34s.03-.27.1-.34a.3.3 0 0 1 .24-.12zm9.33.03h.15l.14.04v.65c-.05.05-.1.08-.15.1-.07.02-.12.02-.19.02-.1 0-.16-.02-.21-.1s-.08-.16-.08-.3c0-.13.03-.25.1-.32.05-.07.14-.1.24-.1zm-5.65 0c.1 0 .17.04.22.1.04.06.07.18.07.33s-.03.24-.1.34c-.07.07-.14.1-.26.1h-.15c-.02-.03-.07-.03-.14-.08v-.65l.17-.1c.07-.02.12-.04.19-.04zm-5.96.4v.34l-.17.1c-.05.03-.12.02-.2.02-.06 0-.14 0-.18-.05-.03-.02-.05-.07-.05-.14s0-.12.05-.14c.02-.03.07-.08.14-.08.05-.02.1-.02.2-.02.06-.02.14-.02.2-.02zm7.47 0v.34l-.14.1c-.07.02-.14.02-.2.02-.09 0-.13 0-.18-.05-.05-.02-.08-.07-.08-.14s.03-.12.05-.14c.05-.03.1-.08.15-.08.04-.02.12-.02.19-.02.1-.02.17-.02.21-.02zm3.08 0v.34l-.14.1c-.07.02-.12.02-.2.02-.09 0-.14 0-.18-.05-.05-.02-.08-.07-.08-.14s.03-.12.08-.14c.02-.03.07-.08.12-.08.04-.02.12-.02.21-.02.07-.02.15-.02.2-.02z" />
  </svg>
);
export default SvgBanquesavoir;
