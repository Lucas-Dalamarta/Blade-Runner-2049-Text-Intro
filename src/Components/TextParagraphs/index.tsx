import * as S from './styles'


const TextParagraphs = ({ children, delay }) => {
  return <S.Paragraph delay={delay}>{children}</S.Paragraph>;
};

export default TextParagraphs;
