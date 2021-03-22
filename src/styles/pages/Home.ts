import styled from 'styled-components'

export const AboveTheFoldHome = styled.div`
  height: 100vh;
  min-height: 20rem;

  background-position: top center;
  background-size: cover;
  background-image: url('images/vscode.png');

  @media(min-width: 720px) {
    background-image: url('images/vscode-large.png');
  }
`;