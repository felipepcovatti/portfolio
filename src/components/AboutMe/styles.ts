import styled from 'styled-components'

export const Container = styled.section`
  background: var(--secondary);
  color: #fff;
  padding-bottom: 2rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
      text-align: center;
      margin-bottom: 2rem;
  }

  .email-address {
    display: block;
    svg {
      height: 3rem;
      display: inline;
      fill: currentColor;
      &:first-child{
        max-width: 12em;
        margin-right: 0.17rem;
      }
      &:last-child {
        max-width: 10em;
      }
    }
  }
`;

export const MainText = styled.div`
  margin: 0 0 3rem;

  p {
    max-width: 720px;
    margin: 0 auto 1rem;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 4rem;

  @media(min-width: 720px) {
    grid-template-areas: "interests interests";
    grid-template-columns: 1fr 1fr;
  }

  h3 {
    margin-bottom: 1.5rem;
  }
`

export const Interests = styled.div`

  @media(min-width: 720px) {
    grid-area: interests;
  }

  text-align: center;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(min-width: 720px) {
      flex-direction: row;
      grid-area: interests;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      & + span {
        margin: 1.5rem 0 0 0;
        @media(min-width: 720px) {
          margin: 0 0 0 2rem;
        }
      }

      @media(min-width: 720px) {
          flex-direction: row;
          grid-area: interests;
      }
      svg {
        font-size: 1.75rem;
        margin: 0 0.5rem 0 0;
      }
    }
  }
  
`;

export const More = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    text-decoration: underline;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      color: var(--primary);
      font-size: 3rem;
      margin-right: 0.75rem;
    }
  }
`;

export const Contact = styled.div`
  text-align: right;
`;

