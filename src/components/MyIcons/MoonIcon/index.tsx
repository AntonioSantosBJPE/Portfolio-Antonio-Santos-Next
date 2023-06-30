interface IpropsLinkedinIcon {
  className: string;
}
export const LinkedinIcon = ({ className, ...rest }: IpropsLinkedinIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="m18 2 .618 1.236c.265.53.398.796.575 1.026.158.204.34.387.545.545.23.177.495.31 1.026.575L22 6l-1.236.618c-.53.265-.796.398-1.026.575-.204.158-.387.34-.545.545-.177.23-.31.495-.575 1.026L18 10l-.618-1.236c-.265-.53-.398-.796-.575-1.026a2.996 2.996 0 0 0-.545-.545c-.23-.177-.495-.31-1.026-.575L14 6l1.236-.618c.53-.265.796-.398 1.026-.575.204-.158.387-.34.545-.545.177-.23.31-.495.575-1.026L18 2ZM21 13.39A7.617 7.617 0 1 1 10.611 3C5.78 3.458 2 7.527 2 12.479A9.521 9.521 0 0 0 11.521 22c4.952 0 9.02-3.78 9.479-8.61Z" />
      </g>
    </svg>
  );
};
