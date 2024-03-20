import React from 'react';
import { useTheme } from "@mui/material";

const YoutubeIcon = (props) => {
  const theme = useTheme();
  return (
    <svg
      width={props.size || '2rem'}
      height={props.size || '2rem'}
      viewBox='0 0 106 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M93.4592 11.2515C95.9124 15.4257 97.1151 22.8848 97.1275 35.8092L97.1118 35.8565V36.0595C97.1118 42.4669 96.8093 47.6319 96.1914 51.7273C95.5716 55.8347 94.6457 58.7858 93.451 60.8204L93.445 60.8306L93.4392 60.841C92.3785 62.7287 91.4093 63.711 90.1686 64.3166C88.8624 64.9542 87.121 65.2451 84.3332 65.4352C78.5051 65.7659 63.985 65.9407 52.6689 65.9407C41.3511 65.9407 26.7211 65.7659 20.9586 65.4274C18.1913 65.2374 16.4475 64.9467 15.1305 64.3067C13.8774 63.6978 12.8908 62.7097 11.8161 60.8196L11.8123 60.813L11.8085 60.8065C10.6211 58.7755 9.69887 55.8259 9.08097 51.7179C8.46491 47.6222 8.16245 42.4549 8.16245 36.0436V35.996C8.16245 29.6088 8.46489 24.4495 9.08193 20.3517C9.70078 16.242 10.6251 13.2793 11.8176 11.2313L11.8214 11.2248L11.825 11.2183C12.9023 9.31646 13.8784 8.33384 15.1197 7.73581C16.4274 7.10582 18.1677 6.8306 20.9595 6.66824L20.9595 6.66828L20.97 6.66759C26.7602 6.28209 41.6489 6.1466 52.6689 6.1466C63.6899 6.1466 78.5846 6.28213 84.3257 6.67536L84.3257 6.67544L84.3398 6.67624C87.112 6.83466 88.8476 7.10617 90.1545 7.73581C91.3948 8.33336 92.3743 9.31873 93.4467 11.2299L93.4528 11.2407L93.4592 11.2515ZM97.2158 9.03532C95.7717 6.47108 94.1608 4.81182 92.0384 3.7885C89.9667 2.7896 87.5282 2.45958 84.5855 2.29165C78.705 1.95609 64.1978 1.75 52.6213 1.75C41.5952 1.75 26.5678 1.89228 20.6379 2.2844C17.683 2.4798 15.2452 2.81262 13.1785 3.80183C11.0549 4.81827 9.44593 6.46331 7.99177 9.02499C5.08515 14.1454 3.75 22.6182 3.75 35.9881V36.0595C3.75 49.4226 4.99408 57.8497 7.99206 62.9734C9.4817 65.5192 11.0909 67.1703 13.2007 68.2C15.2606 69.2053 17.6781 69.5553 20.6279 69.7551C26.5358 70.1554 41.2087 70.2817 52.6213 70.2817C64.0449 70.2817 78.6404 70.0995 84.5847 69.7639C87.5671 69.5956 90.0126 69.2426 92.0807 68.2237C94.1944 67.1823 95.7854 65.513 97.2141 62.9758C100.236 57.8854 101.469 49.4295 101.469 36.0595V36.0119C101.469 22.5861 100.226 14.1763 97.2158 9.03532Z'
        fill={theme.palette.primary.main}
        stroke={theme.palette.primary.main}
        strokeWidth='2.5'
      />
      <path
        d='M71.2515 34.1384L71.2443 34.1339L71.2371 34.1296L42.0642 16.6751C41.7359 16.4744 41.36 16.3645 40.975 16.3569C40.5865 16.3492 40.2029 16.446 39.8644 16.6372C39.526 16.8284 39.2451 17.107 39.0512 17.4438C38.8586 17.7782 38.7588 18.1577 38.7617 18.5433L38.7616 53.5175L38.7617 53.5286C38.7651 53.91 38.869 54.2838 39.0627 54.6123C39.2558 54.9394 39.5313 55.2103 39.862 55.3977C40.184 55.5814 40.547 55.6812 40.9177 55.6878L40.9314 55.6881L40.945 55.688C41.3392 55.6865 41.7254 55.5776 42.0622 55.3733C42.064 55.3722 42.0659 55.371 42.0677 55.3699L71.2363 37.8784C71.2368 37.878 71.2374 37.8777 71.2379 37.8774C71.238 37.8774 71.2381 37.8773 71.2381 37.8773C71.5596 37.6848 71.8261 37.4126 72.0118 37.0869C72.1977 36.7606 72.2962 36.3919 72.2976 36.0164L72.2976 36.0103C72.2972 35.635 72.2009 35.266 72.0178 34.9384C71.8347 34.6108 71.5709 34.3354 71.2515 34.1384ZM43.1186 22.3964L65.8774 36.0571L43.1186 49.6633V22.3964Z'
        fill={theme.palette.primary.main}
        stroke={theme.palette.primary.main}
        strokeWidth='2.5'
      />
    </svg>
  );
};

export default YoutubeIcon;
