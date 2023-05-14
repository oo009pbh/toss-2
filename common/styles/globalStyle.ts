import { css } from '@emotion/react';
export const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 15px;
    line-height: 1.46668;
    font-weight: 400;
    font-variant-ligatures: common-ligatures;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  // 글로벌 색깔
  :root {
    --black: #0a0a0a;
    --black-40: #404040;
    --gray-20: #f5f5f5;
    --gray-30: #ededed;
    --gray-40: #e0e0e0;
    --gray-50: #c2c2c2;
    --gray-60: #9e9e9e;
    --gray-70: #757575;
    --gray-80: #616161;
    --gray-90: #404040;
    --white: #ffffff;
    --primary: #f2a93c;
  }
`;
