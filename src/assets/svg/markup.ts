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
  };
};
