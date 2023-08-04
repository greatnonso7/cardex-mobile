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
  };
};
