import styled from 'styled-components'

export const Container = styled.header`
  background: black;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  color: white;

  @media(min-width:721px) {
    img {
      order: 2;
    }
  } 

  > div:first-child {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0; 

    img {
      width: 9rem;
      border-radius: 50%;
    }

    h1 {
      padding: 1rem 0 0.5rem;
    }

    @media(min-width:721px) {
      flex-direction: row;
      align-items: flex-start;
      transform: translateY(7rem);
      padding: 0;
      img {
        width: 14rem;
        order: 2;
      }
    } 
  }

  ul {
    margin-top: 2rem;
    position: absolute;
    list-style: none;

    li {
      display: inline-block;
      font-size: 1.2rem;
      a {
        border-radius: 0.25rem;
        background: var(--primary);
        padding: 1rem;
        cursor: pointer;
      }
      
      & + li {
        margin-left: 1rem;
        a {
          background: var(--secondary);
        }
      }
    }
  }
`