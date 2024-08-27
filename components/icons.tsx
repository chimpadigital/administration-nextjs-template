import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const PlusIcon = ({
  size = 12,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 12 12"
    width={size || width}
    {...props}
  >
    <path d="M6.83333 6.33332H6.33333V6.83332V11C6.33333 11.0884 6.29821 11.1732 6.2357 11.2357C6.17319 11.2982 6.0884 11.3333 6 11.3333C5.91159 11.3333 5.82681 11.2982 5.7643 11.2357C5.70178 11.1732 5.66666 11.0884 5.66666 11V6.83332V6.33332H5.16666H0.999997C0.911592 6.33332 0.826808 6.2982 0.764295 6.23569C0.701783 6.17318 0.666664 6.0884 0.666664 5.99999C0.666664 5.91158 0.701783 5.8268 0.764295 5.76429C0.826808 5.70178 0.911592 5.66666 0.999997 5.66666H5.16666H5.66666V5.16666V0.99999C5.66666 0.911584 5.70178 0.8268 5.7643 0.764287C5.82681 0.701775 5.91159 0.666656 6 0.666656C6.0884 0.666656 6.17319 0.701775 6.2357 0.764287C6.29821 0.8268 6.33333 0.911584 6.33333 0.99999V5.16666V5.66666H6.83333H11C11.0884 5.66666 11.1732 5.70178 11.2357 5.76429C11.2982 5.8268 11.3333 5.91158 11.3333 5.99999C11.3333 6.0884 11.2982 6.17318 11.2357 6.23569C11.1732 6.2982 11.0884 6.33332 11 6.33332H6.83333Z" stroke="white" />
  </svg>
);
export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);
export const LoginIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (

  <svg
    focusable="false"
    height={size || height}
    role="presentation"
    fill="none"
    viewBox="0 0 20 20"
    width={size || width}
    {...props}
  >
    <path d="M9.73328 12.1833L11.8666 10.05L9.73328 7.91667" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.33337 10.05H11.8084" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 3.33333C13.6833 3.33333 16.6667 5.83333 16.6667 9.99999C16.6667 14.1667 13.6833 16.6667 10 16.6667" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const DeleteIcon = (props: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" {...props} viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
  </svg>
);
export const EditIcon = (props: IconSvgProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
  </svg>
);
export const MenuIcon = (props: IconSvgProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
  </svg>
);
export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const AppLogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg {...props} width={width} height={height} viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.2941 0H8.70588C4.1739 0 0.5 3.6739 0.5 8.20588V22.7941C0.5 27.3261 4.1739 31 8.70588 31H23.2941C27.8261 31 31.5 27.3261 31.5 22.7941V8.20588C31.5 3.6739 27.8261 0 23.2941 0Z" fill="#1C4741" />
      <g clipPath="url(#clip0_2829_19332)">
        <path d="M15.8606 5.6415L14.6414 13.8688C14.6004 14.1379 14.9807 14.2388 15.0776 13.9884L18.754 4.67337C18.8286 4.48273 18.6347 4.29583 18.4483 4.3818L15.9911 5.46955C15.9203 5.49945 15.8681 5.56674 15.8569 5.64524L15.8606 5.6415Z" fill="white" />
        <path d="M8.85839 8.70289L13.8472 15.349C14.0113 15.5658 14.3469 15.3677 14.2387 15.1172L10.2007 5.95549C10.1187 5.76859 9.85019 5.77606 9.77935 5.9667L8.82856 8.48235C8.80246 8.55711 8.81365 8.63934 8.85839 8.69915V8.70289Z" fill="white" />
        <path d="M6.13273 16.1153L14.3841 16.9825C14.6525 17.0124 14.7383 16.6274 14.481 16.5377L5.04026 13.2595C4.84637 13.1922 4.67113 13.394 4.76061 13.5772L5.95003 15.9919C5.98359 16.0629 6.05443 16.1115 6.129 16.119L6.13273 16.1153Z" fill="white" />
        <path d="M9.48103 22.9894L15.9464 17.7749C16.1589 17.603 15.9464 17.274 15.704 17.3899L6.69951 21.7297C6.51681 21.8194 6.53173 22.0848 6.72561 22.1521L9.26477 23.0268C9.33934 23.0529 9.42137 23.038 9.48103 22.9894Z" fill="white" />
        <path d="M16.4012 25.4564L17.7435 17.2479C17.7883 16.9787 17.4117 16.8741 17.3073 17.1245L13.4929 26.3834C13.4146 26.5741 13.6048 26.761 13.7912 26.6825L16.2633 25.6321C16.3341 25.6022 16.3863 25.5349 16.4012 25.4602V25.4564Z" fill="white" />
        <path d="M23.3514 22.2268L18.3141 15.6181C18.15 15.4013 17.8144 15.6032 17.9263 15.8499L22.0277 24.9817C22.1098 25.1686 22.3782 25.1574 22.4491 24.9668L23.3849 22.4436C23.411 22.3689 23.3999 22.2866 23.3514 22.2268Z" fill="white" />
        <path d="M26.0471 15.2069L17.8442 13.9697C17.5758 13.9286 17.4751 14.3061 17.7249 14.407L27.0091 18.1076C27.1992 18.1824 27.3856 17.9917 27.3036 17.8048L26.2223 15.3415C26.1925 15.2705 26.1254 15.2182 26.0471 15.2069Z" fill="white" />
        <path d="M22.8741 8.2319L16.3006 13.3043C16.0843 13.4688 16.2857 13.8052 16.5355 13.6931L25.6295 9.54767C25.8159 9.46169 25.8047 9.1963 25.6146 9.12528L23.0941 8.19826C23.0195 8.1721 22.9375 8.18331 22.8778 8.2319H22.8741Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_2829_19332">
          <rect width="22.584" height="22.3418" fill="white" transform="translate(4.73828 4.35938)" />
        </clipPath>
      </defs>
    </svg>

  );
};
