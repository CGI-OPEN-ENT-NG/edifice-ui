import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconUniversalis = ({
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
      d="M12.94 16.96c-.48-.03-.94.36-.92.96 0 .48.03.57.41.82.92.6 1.93-.77 1.16-1.52a.9.9 0 0 0-.65-.26m-10.3 0c-.28 0-.36.16-.1.24.25.1.22 1.37-.04 1.51-.14.07-.1.1.27.1.26 0 .36-.03.28-.08-.1-.07-.14-.26-.12-.62l.05-.5.53.64c.3.37.58.63.63.6s.07-.4.07-.84c0-.48.05-.84.14-.91.1-.1.03-.15-.31-.12-.39 0-.4 0-.22.14.15.1.2.24.15.63l-.03.48-.53-.63c-.38-.48-.57-.65-.76-.65zm4.07 0c-.24 0-.43.04-.43.12 0 .04.04.1.1.1.18 0 .76.88.76 1.17 0 .12-.1.29-.2.36-.14.07-.06.1.37.1.4 0 .48-.03.34-.1a.54.54 0 0 1-.2-.36c0-.29.6-1.18.77-1.18a.1.1 0 0 0 .1-.1c0-.07-.17-.11-.36-.11-.22 0-.39.04-.39.12 0 .04.05.1.12.1.05 0 .03.14-.1.3l-.18.32-.27-.3c-.14-.16-.19-.28-.12-.3.27-.1.1-.24-.31-.24m7.77 0c-.3 0-.53.04-.53.12 0 .04.05.1.12.1.16 0 .14 1.5-.03 1.56-.07.04.08.07.34.07.31 0 .43-.03.36-.08-.17-.1-.29-.62-.17-.64 1.28-.12 1.18-1.13-.1-1.13zm2.5 0c-.44 0-.75.04-.75.12 0 .04.05.1.1.1.14 0-.6 1.34-.84 1.5-.15.1-.1.13.26.13.29 0 .39-.03.29-.1-.22-.12.02-.5.31-.5.15 0 .2.07.2.24 0 .14-.05.26-.13.29-.07.04.22.07.65.07.68 0 .77-.03.85-.22.1-.26-.05-.38-.2-.17-.04.12-.21.2-.4.2-.3 0-.34-.05-.34-.32 0-.24.05-.31.21-.31.12 0 .22.05.22.1 0 .07.05.12.12.12.05 0 .1-.17.1-.37s.04-.38.12-.4c.04-.03.07-.15.02-.27-.05-.2-.14-.22-.8-.22zm1.56 0c-.58 0-.6.02-.43.19.26.29.26 1.42 0 1.56-.15.07-.03.1.53.1.64 0 .77-.03 1-.24.27-.27.37-.75.2-1.13-.1-.3-.65-.48-1.3-.48m1.9 0c-.43 0-.43.02-.29.19.22.24.2 1.44-.02 1.56-.1.07.14.1.7.1.47 0 .81-.03.74-.08-.22-.07-.17-.3.07-.43.29-.14.7.05.63.31-.05.17 0 .2.3.2.37 0 .4 0 .25-.17-.1-.1-.31-.53-.48-.94s-.34-.74-.36-.74c-.05 0-.27.4-.5.89-.3.62-.47.86-.59.84-.14-.03-.19-.2-.21-.77 0-.48.02-.75.1-.75.04 0 .11-.04.11-.1s-.21-.11-.45-.11m-9.81.02c-.46 0-.48 0-.31.12.14.12.16.29.16.82s-.02.7-.16.8c-.15.06 0 .09.62.09.77 0 .84 0 .9-.22.06-.31-.03-.38-.2-.17-.07.12-.29.2-.48.2h-.34v-.72c0-.58.02-.73.17-.73.07 0 .14-.04.14-.1s-.21-.11-.5-.09m-1.2 0c-.6 0-.94.27-1.04.74-.1.46.1.87.48 1.06.15.08.41.12.58.08.39-.05.74-.34.65-.49-.05-.07-.12-.04-.2.05-.23.31-.57.31-.86.05-.31-.31-.36-.72-.12-1.08a.63.63 0 0 1 .96.02l.17.22v-.32c0-.3 0-.3-.5-.33zm-8.25 0c-.27 0-.44.02-.44.07 0 .07.05.12.12.12.15 0 .15 1.37-.02 1.52-.1.1.05.12.63.12.6 0 .79-.03.84-.17.12-.29.07-.39-.12-.2a1 1 0 0 1-.56.18c-.3 0-.33-.05-.33-.32s.02-.31.31-.31c.17 0 .34.05.36.12.05.07.07-.02.07-.22 0-.26-.02-.33-.12-.24a.62.62 0 0 1-.38.15c-.2 0-.24-.07-.24-.32 0-.28.02-.3.34-.3.19 0 .4.06.48.16.14.17.16.17.12-.07-.03-.24-.08-.27-.75-.3h-.31zm4.38 0c-.56 0-.87.2-1.01.67-.12.46.1 1.01.45 1.16.34.14.84.04 1.1-.2.27-.26.15-.4-.14-.16-.1.1-.21.12-.26.1-.05-.06-.07-.03-.07.04 0 .2-.22.14-.5-.14s-.35-.72-.1-1.06a.63.63 0 0 1 .96.02l.17.22v-.31c0-.3-.03-.32-.49-.34h-.12zm13.27.17c.07 0 .2.05.34.12.33.19.43.58.26.98-.12.3-.21.37-.48.37h-.34v-.73c0-.52.03-.74.22-.74m-1.59.02c.36 0 .44.15.27.41-.22.31-.53.27-.53-.1 0-.26.05-.3.26-.3zm-4.33 0c.15 0 .3.05.39.12.19.2.14 1.06-.05 1.25-.29.3-.58.2-.8-.24-.14-.24-.09-.77.13-.98.07-.1.19-.15.33-.15m1.78.03c.08 0 .15.02.22.12.14.12.14.21.07.33-.2.3-.34.27-.43-.02-.05-.27.02-.43.14-.43m1.83.3c.02-.01.02.06.02.23s-.04.26-.14.26c-.14 0-.14-.05-.05-.24.1-.17.15-.24.17-.24zm5.43.13v.02c0 .08.05.2.08.3.04.09 0 .14-.17.14-.12 0-.22-.03-.22-.08 0-.12.24-.4.32-.38zm-6.63 1.97-.03.02c-.04.05-.24.08-.5.05-.39-.05-.43-.02-.63.15-.36.36-.29.77.2 1.03.62.39.79.53.79.7 0 .38-.55.45-.87.1-.12-.13-.19-.27-.19-.34 0-.05-.05-.08-.07-.05-.05.02-.07.2-.07.4v.37l.58.02c.55.03.6 0 .79-.17.14-.12.2-.24.2-.4 0-.39-.06-.46-.54-.75-.74-.43-.84-.62-.5-.84.14-.1.19-.1.36-.03a.9.9 0 0 1 .34.34c.16.36.19.36.19-.17 0-.29-.03-.4-.05-.43m7.7 0-.03.02c-.05.05-.24.08-.53.05-.43-.05-.43-.05-.63.2-.1.11-.19.28-.19.4 0 .22.39.6.87.9.4.21.46.47.17.67-.3.16-.75-.08-.85-.46-.07-.27-.14-.14-.16.29v.36l.57.02c.68.03.85-.07.97-.45.1-.36-.05-.58-.65-.97-.58-.36-.7-.55-.39-.74.12-.07.22-.1.36-.02.24.07.39.26.39.43 0 .07.05.14.07.17.05.02.07-.15.07-.44 0-.3 0-.43-.05-.43zm-19.99.05c-.7 0-.96.07-.6.17l.2.04-.03.87c-.03.8-.05.87-.2.99a.76.76 0 0 1-.48.14c-.45 0-.55-.2-.57-1.03-.03-.7.05-1.04.21-1.04.08 0 .12-.04.12-.07 0-.1-.98-.1-1.03 0-.02.03.02.07.12.07.14.03.17.08.2.92.04.93.09 1.15.38 1.27.1.05.33.07.55.1.36 0 .46-.03.65-.22l.24-.21.02-.9c.03-.89.03-.89.2-.93.09-.03.23 0 .36.07.16.12.16.12.14 1.03-.02.84-.02.9-.17.99-.1.02-.14.1-.12.12.07.07.8.05.84-.03.03-.04-.02-.07-.1-.07-.2 0-.23-.1-.2-.89l.02-.72.7.9c.4.47.74.86.76.86.05 0 .07-.5.07-1.13 0-1.04 0-1.1.15-1.13.07-.03.14-.07.14-.12 0-.07-.77-.07-.82.02-.02.03.03.07.1.07.22 0 .22.08.2.85v.67l-.68-.84-.7-.82zm3.22 0c-.48 0-.77.1-.43.14.17.03.17.05.2 1.06.02.96.02 1.01-.13 1.06-.1.02-.14.07-.14.1 0 .04.21.07.5.07.48 0 .65-.1.34-.2-.12-.02-.15-.1-.15-1.03s.03-1 .15-1.03c.31-.1.12-.17-.34-.17m1.06 0c-.48 0-.65.07-.36.17.07.02.24.29.43.74l.48 1.1c.1.22.22.42.24.4.05 0 .27-.49.5-1.06.22-.56.47-1.06.51-1.11.05-.07.17-.1.3-.1l.2.03v1.03c0 1.04 0 1.04-.14 1.06-.1.02-.14.05-.12.1s.44.07.92.07c.98 0 .94.02 1.08-.56.05-.19.05-.19-.2.08-.23.24-.28.26-.66.26h-.39v-.94h.36c.29 0 .36.03.39.15.1.29.16.14.16-.3 0-.45-.07-.52-.19-.23-.07.14-.14.17-.4.17h-.32v-.85h.43c.39 0 .44 0 .5.17.13.27.22.22.2-.1l-.02-.26H9.9c-1.2-.02-1.61.02-1.23.14.1.05.12.1.1.17l-.32.8-.26.67-.22-.5c-.4-.9-.43-1.02-.29-1.14.2-.14.15-.16-.38-.16zm13.54 0c-.48 0-.65.1-.31.17l.19.04-.03 1c-.02.9-.02.95-.19 1.05-.07.02-.12.1-.1.12s.25.05.49.05c.48 0 .6-.08.36-.17-.15-.1-.15-.12-.15-1.06 0-.91 0-.96.15-1.03.26-.12.12-.17-.41-.17m-2.21 0c-.2 0-.34.02-.37.05s.03.07.1.12c.17.07.17.12.17 1.03 0 .94 0 .96-.17 1.03-.07.05-.14.1-.14.12 0 .05.4.08.91.08h.92l.12-.34c.04-.2.1-.36.07-.39-.03 0-.12.08-.24.22-.15.17-.27.24-.53.27-.5.04-.55 0-.55-.97 0-.81.07-1.08.26-1.08.05 0 .1-.05.1-.07 0-.05-.36-.07-.65-.07m-6.79 0c-.36 0-.52.07-.26.14l.17.05v.99c0 .96 0 .98-.15 1.08-.1.02-.14.1-.12.12.08.07 1.01.05 1.01-.03 0-.02-.07-.07-.14-.12-.14-.04-.17-.12-.2-.48-.02-.57.15-.55.63.15.39.5.39.53.7.53s.4-.1.17-.2a3.6 3.6 0 0 1-.87-.96c0-.02.1-.07.2-.1.21-.04.33-.26.3-.6-.04-.38-.28-.5-1-.55-.17-.02-.32-.02-.44-.02m5.08.02c-.05 0-.29.5-.55 1.1-.32.73-.5 1.1-.6 1.12-.08.02-.1.07-.08.12.03.07.75.1.75.02 0-.02-.07-.1-.12-.14-.1-.08-.12-.12-.05-.34l.1-.27h.91l.07.27c.07.21.07.26-.02.34-.2.14-.15.19.34.19.45 0 .6-.07.36-.22-.08-.02-.22-.26-.34-.5-.1-.27-.31-.75-.46-1.09-.14-.36-.29-.62-.31-.6m-4.76.2h.21c.24 0 .48.21.48.43s-.04.31-.26.4a.64.64 0 0 1-.29.08c-.14 0-.14-.02-.14-.46zm4.66.4.15.32c.04.16.14.33.14.4.02.05-.05.08-.29.08-.17 0-.31 0-.31-.03l.14-.4zM5.65 1.81v6.7c0 6.4.02 6.71.46 7.15.4.43.74.45 6.18.45 5.02 0 5.77-.04 6.13-.38.39-.34.4-.87.4-7.14V1.8h-1.99v12.5H7.67V1.81zm2.91 0v11.4h7.38v-2.46h-4.71V8.52l2.07-.05 2.07-.08V6.17L13.3 6.1l-2.07-.05v-2h4.47V1.81z"
    />
  </svg>
);
export default SvgIconUniversalis;
