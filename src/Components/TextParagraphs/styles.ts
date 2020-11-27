import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

type ParagraphProps = {
  delay: number
}

export const Paragraph = styled.div<ParagraphProps>`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 3px;

  opacity: 0;
  animation: ${fadeIn} 5s linear ${(props) => props.delay}s;
  animation-fill-mode: forwards;

  & + div {
    margin-top: 40px;
  }

  > span {
    color: red;
    margin-right: 8px;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;

    & + div {
      margin-top: 28px;
    }
  }
`;
