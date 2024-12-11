import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconElyceepicardie = ({
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
      d="m17.55 20.23-.19-.17a.9.9 0 0 1 0-.5c.07-.13.41-.25.63-.25.33 0 .43-.12.24-.29-.08-.07-.17-.07-.36-.07-.15.03-.32.05-.37.07-.07.03-.1.03-.1-.1 0-.14.1-.16.51-.16.3 0 .36 0 .48.12.15.12.15.12.17.75l.03.62h-.15c-.07 0-.12-.02-.12-.07s-.05-.05-.21.02c-.27.12-.36.12-.56.03m.63-.24c.12-.08.14-.12.14-.32v-.21l-.24.02c-.36.05-.48.12-.5.29-.03.27.29.36.6.22m2.38.28c-.5-.12-.6-1.08-.14-1.41.12-.1.16-.12.45-.1l.32.02v-.29c0-.28 0-.28.12-.28h.12v2.04h-.12c-.1 0-.12-.03-.12-.07 0-.08-.03-.08-.12-.03a.82.82 0 0 1-.5.12zm.43-.28.2-.08v-.45c0-.41-.03-.46-.13-.48-.24-.05-.4-.03-.55.12s-.14.16-.12.45c.03.46.22.6.6.44m-7.35-.73v-.98l.16-.03c.07 0 .3 0 .46.03.29.02.36.05.5.19.15.17.17.2.15.43-.05.39-.31.6-.77.6h-.22l-.02.36c0 .37 0 .37-.14.39h-.15zm.9-.14c.15-.17.15-.34 0-.5-.09-.1-.16-.12-.38-.12h-.24v.81l.27-.02c.19-.02.29-.07.36-.17zm.73.38v-.74h.24v1.5h-.24v-.75zm.94.68c-.2-.1-.3-.34-.3-.65 0-.34.06-.48.25-.65.14-.1.21-.12.43-.12.34 0 .48.05.48.22 0 .12 0 .12-.14.04-.24-.12-.48-.1-.65.05-.1.1-.12.17-.12.43s.02.32.12.44c.17.14.4.14.65.05.14-.1.14-.08.14.04a.2.2 0 0 1-.1.17c-.14.07-.6.05-.76-.02m2.86-.68c0-.72 0-.74.1-.74.07 0 .11.02.14.1.02.1.02.1.14.02a.6.6 0 0 1 .32-.1c.16 0 .19 0 .19.12.02.12 0 .12-.12.12a.6.6 0 0 0-.34.05l-.17.07-.02.56c0 .5-.03.53-.12.55-.12 0-.12 0-.12-.74zm2.86 0v-.74h.24v1.5h-.24v-.75zm.87.58c-.34-.29-.32-.89 0-1.18.14-.12.21-.14.43-.14.12 0 .29.02.36.05.17.07.29.29.29.5v.2h-.53c-.29 0-.53.02-.53.02-.07.12.07.38.22.46.17.1.48.1.65 0s.19-.1.19.04c0 .15-.22.22-.6.22-.27 0-.31-.02-.48-.17m.84-.84c0-.29-.46-.4-.7-.2-.07.08-.12.18-.12.22 0 .08.05.1.41.1.39 0 .4-.02.4-.12zm-8.37-.86c0-.1.02-.12.12-.12s.12.02.12.11c0 .1-.02.12-.12.12s-.12-.02-.12-.11m6.66 0c0-.1.03-.12.12-.12s.12.02.12.11c0 .1-.02.12-.12.12s-.12-.02-.12-.11m-15.6-.39a6.99 6.99 0 0 1-6.01-5.77c-.1-.6-.1-1.76 0-2.36A7.06 7.06 0 0 1 5.76 4.2c.6-.12 2.19-.12 2.79.02 1.37.29 2.48.9 3.49 1.9a6.78 6.78 0 0 1 1.94 3.7A6.97 6.97 0 0 1 6.33 18zm1.46-2.74c1.42-.17 2.65-1.15 3.4-2.65.18-.43.26-.6.26-.84.02-.26.02-.31-.07-.4-.15-.15-.39-.15-.51 0-.05.04-.2.23-.29.45-.53 1.06-1.13 1.64-2 1.9-.48.14-1.39.1-1.92-.07a3 3 0 0 1-1.75-1.59 3.15 3.15 0 0 1-.36-2.33c.24-.9.6-1.37 1.3-1.7.33-.18.45-.2.84-.22s.5 0 .79.12c.7.26 1.35.86 1.32 1.22-.02.15-.07.22-1.49 1.16-.82.55-1.51 1.05-1.56 1.1-.14.17-.12.39.07.55.12.12.17.15.31.12.12-.02.87-.5 2.24-1.41 2.07-1.38 2.26-1.52 2.36-1.69.12-.24-.6-1.18-1.33-1.68-.6-.41-1.4-.65-2.06-.65s-1.37.22-2.1.65a3.85 3.85 0 0 0-1.73 1.83 3.97 3.97 0 0 0 .75 4.83c.8.8 1.75 1.23 3.05 1.35zm7.34 2.67s.07-.22.19-.46l.19-.43-.43-1.06-.46-1.06h.17c.07-.02.17-.02.19 0s.22.39.38.8c.2.43.34.79.37.79l.36-.8.31-.79h.22l.19-.02-.17.38c-.07.22-.39.92-.65 1.54l-.48 1.13h-.2c-.11 0-.18 0-.18-.02m2.8-.77c-.4-.1-.66-.36-.76-.82-.14-.65.14-1.25.67-1.44.22-.08.8-.03.99.07.12.05.14.07.14.26v.24l-.14-.12c-.36-.24-.82-.24-1.06 0-.26.27-.31.87-.12 1.2.2.32.63.4 1.06.17a1 1 0 0 1 .26-.12v.22c-.02.2-.04.22-.21.27-.27.1-.63.12-.82.07zm2.2-.03a.9.9 0 0 1-.65-.43c-.12-.2-.12-.26-.12-.67s0-.48.14-.7c.2-.31.5-.48.92-.48.57 0 .89.29.93.89l.03.31h-1.66v.15c0 .4.38.7.89.65.17-.03.38-.08.5-.15l.22-.1-.02.22c0 .2-.03.22-.2.27a2 2 0 0 1-.98.05zm.86-1.46-.02-.15c0-.05-.07-.14-.15-.21-.26-.27-.81-.2-1 .14-.17.29-.17.31.55.31.57 0 .67-.02.62-.1zm1.66 1.49c-.26-.07-.45-.17-.6-.36-.17-.22-.24-.46-.21-.92.02-.31.04-.4.16-.57a1 1 0 0 1 .9-.46c.57 0 .9.29.96.91l.04.3h-.86c-.99 0-.97 0-.75.4.24.46.8.53 1.5.17.02-.03.04.07.04.17 0 .21-.05.26-.5.36-.27.05-.41.05-.68 0m.82-1.52c0-.14-.12-.38-.24-.43-.17-.1-.55-.07-.74.05a.77.77 0 0 0-.32.48s.3.02.65.02c.63 0 .65 0 .65-.12m-9.71 1.5a15 15 0 0 1-.05-1.6V14h.4v3.15h-.16c-.1 0-.17-.03-.2-.03zm6.46-2.65c0-.03.08-.2.17-.39l.2-.36h.2c.13 0 .23.03.23.05l-.27.36c-.2.3-.29.36-.39.36z"
    />
  </svg>
);
export default SvgIconElyceepicardie;
