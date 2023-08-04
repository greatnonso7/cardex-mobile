export const getMarkup: any = (color?: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tabFillColor = color || '979797';
  return {
    logo: `<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5377 0L13.8504 8.20694L10.8879 4.63558L14.6691 0H20.5377Z" fill="#042B2E"/>
    <path d="M13.9476 10.0847L20.5172 18H15.022L11.2256 13.4207L13.9476 10.0847Z" fill="#042B2E"/>
    <path d="M10.1666 5.52588L13.1239 9.09209L10.4019 12.4332L5.86356 18H0L7.44455 8.86696L0.0818821 0H5.57704L10.1666 5.52588Z" fill="#042B2E"/>
    </svg>
    `,
    skip: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 8L17 12L13 16" stroke="#47EAA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 8L11 12L7 16" stroke="#47EAA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    'arrow-right': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12L3 12" stroke="#1A0E2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 19L2 12L9 5" stroke="#1A0E2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    'eye-slash': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18C17.5228 18 22 12 22 12C22 12 17.5228 6 12 6C6.47715 6 2 12 2 12C2 12 6.47715 18 12 18Z" stroke="#CECEE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#CECEE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    'active-checkbox': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#47EAA6"/>
<path d="M7 12.2813L10.3294 15.7813L17 8.78125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    'arrow-down': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<path d="M16 10L12 14L8 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`,
    error: `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_420_911)">
    <path d="M13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27Z" fill="#DE3618"/>
    <path d="M9 20.4711L16.3719 28C22.4774 26.3372 27 20.6559 27 13.8661C27 13.7275 27 13.5889 27 13.4503L21.2111 8L9 20.4711Z" fill="#C4371D"/>
    <path d="M16.3432 13.5L20.6075 9.23565C21.1308 8.71236 21.1308 7.86392 20.6075 7.3402L19.6598 6.39247C19.1365 5.86918 18.2881 5.86918 17.7643 6.39247L13.5 10.6568L9.23565 6.39247C8.71236 5.86918 7.86392 5.86918 7.3402 6.39247L6.39247 7.3402C5.86918 7.86349 5.86918 8.71193 6.39247 9.23565L10.6568 13.5L6.39247 17.7643C5.86918 18.2876 5.86918 19.1361 6.39247 19.6598L7.3402 20.6075C7.86349 21.1308 8.71236 21.1308 9.23565 20.6075L13.5 16.3432L17.7643 20.6075C18.2876 21.1308 19.1365 21.1308 19.6598 20.6075L20.6075 19.6598C21.1308 19.1365 21.1308 18.2881 20.6075 17.7643L16.3432 13.5Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_420_911">
    <rect width="27" height="27" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
    checkMark: `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27Z" fill="#32BA7C"/>
    <path d="M10.0503 19.59L16.9919 26.5316C22.7411 24.9985 26.9998 19.7603 26.9998 13.5001C26.9998 13.3723 26.9998 13.2445 26.9998 13.1168L21.5487 8.09155L10.0503 19.59Z" fill="#0AA06E"/>
    <path d="M13.8406 16.5235C14.4368 17.1197 14.4368 18.1418 13.8406 18.738L12.6056 19.973C12.0094 20.5693 10.9873 20.5693 10.3911 19.973L4.98256 14.5219C4.38635 13.9257 4.38635 12.9036 4.98256 12.3074L6.21758 11.0724C6.81379 10.4762 7.83587 10.4762 8.43209 11.0724L13.8406 16.5235Z" fill="white"/>
    <path d="M18.5677 7.11196C19.1639 6.51574 20.186 6.51574 20.7822 7.11196L22.0172 8.34697C22.6135 8.94319 22.6135 9.96527 22.0172 10.5615L12.6482 19.888C12.0519 20.4842 11.0299 20.4842 10.4336 19.888L9.19863 18.653C8.60241 18.0567 8.60241 17.0347 9.19863 16.4385L18.5677 7.11196Z" fill="white"/>
    </svg>
    `,
  };
};
