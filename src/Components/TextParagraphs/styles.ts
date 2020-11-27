import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Paragraph = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 3px;
  
  opacity: 0;
  animation: ${fadeIn} 5s linear ${props => props.delay}s;
  animation-fill-mode: forwards;

  & + div {
    margin-top: 40px;
  }

  > span {
    color: red;
    margin-right: 8px;
  }
`;
