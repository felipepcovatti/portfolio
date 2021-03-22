import styled from 'styled-components'

export const Container = styled.div`

  img {
    display: block;
    max-width:100%;
    border-radius: 0.25rem;
    transition: transform 0.2s;
  }
`

export const Description = styled.div`
  margin: 1rem;

  h3 {
    text-align: center;
    margin-bottom: .5rem;
  }
`

export const Links = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  position: relative;
  bottom: 0;
  a {
    background: var(--secondary);
    padding: 1rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      filter: brightness(0.9)
    }

    &:first-child {
      background: var(--primary);
    }

    svg {
      margin-left: 0.5rem;  
    }
  }
`