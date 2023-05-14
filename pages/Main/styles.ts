import styled from '@emotion/styled';
export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  & > button {
    margin: 20px auto;
  }

  & > div {
    height: 30px;
    width: 600px;
    border: 1px solid var(--black);
    margin: 0 auto;

    text-align: center;
    line-height: 30px;
  }
`;
