import React from 'react';
import { useTheme } from "@mui/material";

const DownloadIcon = (props) => {
  const theme = useTheme();
  return (
    <svg
      width={props.size || '2rem'}
      height={props.size || '2rem'}
      viewBox='0 0 72 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_651_1480)'>
        <path
          d='M53.1119 57.1119C45.3449 63.3565 36.5698 65.8386 26.7751 64.1777C18.4152 62.7613 11.6332 58.5583 6.51211 51.7901C-3.43252 38.6529 -1.88006 19.9562 10.4221 8.45681C22.09 -2.44054 40.8535 -2.84653 53.0796 7.48334C66.1961 18.5745 68.8674 38.9666 57.0565 53.1719C57.2641 53.4026 57.4717 53.6333 57.6909 53.8409C62.0646 58.2254 66.4414 62.6083 70.8212 66.9897C71.5132 67.6817 71.9746 68.4384 71.8777 69.4326C71.7832 70.5699 71.2041 71.3957 70.1361 71.7971C69.6405 72.0084 69.092 72.0624 68.5647 71.9519C68.0375 71.8413 67.5569 71.5715 67.188 71.1788C65.2041 69.2111 63.2364 67.2273 61.2641 65.248C58.782 62.7613 56.2991 60.2738 53.8154 57.7855C53.5894 57.5618 53.3587 57.3518 53.1119 57.1119ZM59.0588 32.3761C59.0588 17.6125 47.1418 5.61714 32.4129 5.61714C17.6839 5.61714 5.67472 17.571 5.65396 32.293C5.64242 35.8144 6.32606 39.3035 7.66566 42.5602C9.00525 45.8168 10.9745 48.7771 13.4604 51.2712C15.9464 53.7652 18.9002 55.7441 22.1524 57.0944C25.4047 58.4446 28.8915 59.1397 32.4129 59.1396C47.1418 59.1258 59.0542 47.1673 59.0588 32.3761Z'
          fill={theme.palette.primary.main}
        />
        <path
          d='M29.6193 29.6241V25.9885C29.6193 24.4891 29.6193 22.9897 29.6193 21.4903C29.6378 19.7394 30.7312 18.5652 32.3298 18.5514C33.9285 18.5375 35.1188 19.7371 35.1349 21.5087C35.1603 23.9585 35.1349 26.4084 35.1349 28.8605C35.1349 29.0912 35.1695 29.3057 35.1972 29.6217H39.0957C40.4798 29.6217 41.8639 29.6217 43.248 29.6217C44.9504 29.6425 46.1776 30.8005 46.1868 32.3622C46.1961 33.9239 44.955 35.1304 43.271 35.1465C40.7681 35.1788 38.2653 35.1465 35.7624 35.1581C35.594 35.1581 35.4256 35.1811 35.1395 35.2019V36.1431C35.1395 38.5375 35.158 40.9297 35.1395 43.3242C35.1234 44.6737 34.3391 45.7417 33.1903 46.0923C32.0784 46.4291 30.8374 46.0923 30.2099 45.1096C29.8643 44.5542 29.6702 43.9179 29.647 43.2642C29.5824 40.902 29.6217 38.5352 29.6217 36.1708V35.1558H27.0288C25.1834 35.1558 23.3379 35.1765 21.504 35.1558C19.7416 35.1304 18.5513 33.9562 18.5744 32.323C18.5974 30.6898 19.767 29.6356 21.5248 29.6264C24.1661 29.6125 26.812 29.6241 29.6193 29.6241Z'
          fill={theme.palette.primary.main}
        />
      </g>
      <defs>
        <clipPath id='clip0_651_1480'>
          <rect width='71.8893' height='72' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownloadIcon;