import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconSettingsClass = ({
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
      d="M12 3.5-.05 8.46l2 .83v9.16h1V9.7L12 13.43l12.03-4.97zm-6.02 8.45v4.4s2.15 2.1 6.01 2.1c1.99 0 3.27-.5 4.3-1.04-.02-.07-.1-.15-.16-.2l-.35-.35c-.19-.19-.07-.55.07-.69l.78-.79c.14-.13.56-.19.69-.05l.34.34c.12.1.2.24.35.18v-3.9l-6.02 2.67zm18.04 7.65v-.96a.35.35 0 0 0-.34-.35h-.5a.38.38 0 0 1-.36-.26c-.04-.15-.11-.3-.18-.44a.4.4 0 0 1 .07-.45l.34-.35a.34.34 0 0 0 0-.48l-.67-.68a.34.34 0 0 0-.48 0l-.35.35a.39.39 0 0 1-.46.06 2.6 2.6 0 0 0-.43-.17.4.4 0 0 1-.27-.37V15a.35.35 0 0 0-.34-.34h-.96a.35.35 0 0 0-.35.35v.49a.38.38 0 0 1-.26.37c-.15.04-.3.1-.44.17a.4.4 0 0 1-.45-.06l-.35-.35a.34.34 0 0 0-.48 0l-.68.68a.34.34 0 0 0 0 .48l.35.35a.39.39 0 0 1 .06.45 2.5 2.5 0 0 0-.17.44.4.4 0 0 1-.37.26h-.5a.35.35 0 0 0-.34.35v.96c0 .19.16.34.35.34h.49c.17 0 .32.11.37.27.04.14.1.29.17.43a.4.4 0 0 1-.06.46l-.35.35a.34.34 0 0 0 0 .48l.68.67a.34.34 0 0 0 .48 0l.35-.34a.39.39 0 0 1 .45-.07c.14.07.28.14.44.18.15.06.26.2.26.37v.49c0 .19.16.34.35.34h.96c.19 0 .34-.15.34-.34v-.5c0-.16.11-.32.27-.36.15-.04.29-.11.43-.18a.4.4 0 0 1 .46.07l.35.34a.34.34 0 0 0 .48 0l.68-.68a.34.34 0 0 0 0-.47l-.35-.35a.39.39 0 0 1-.07-.46 2.5 2.5 0 0 0 .18-.43.4.4 0 0 1 .37-.27h.49c.19 0 .34-.15.34-.34m-4.45 1.3c-.98 0-1.79-.8-1.79-1.78s.8-1.79 1.79-1.79a1.786 1.786 0 0 1 0 3.57"
    />
  </svg>
);
export default SvgIconSettingsClass;
