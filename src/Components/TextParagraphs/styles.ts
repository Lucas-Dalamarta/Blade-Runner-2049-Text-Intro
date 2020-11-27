import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 3px;

  + p {
    margin-top: 40px;
  }

  > strong {
    color: red;
    margin-right: 8px;
  }
`;