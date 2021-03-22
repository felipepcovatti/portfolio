import styled from 'styled-components'

export const Container = styled.section`
  background: var(--background);
  color: #fff;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  > p {
    max-width: 720px;
    margin: 0 auto 1rem;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;

  @media(min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
`