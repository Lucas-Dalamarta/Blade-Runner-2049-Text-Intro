import styled from 'styled-components'

import IntroText from '../Components/IntroText'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  @media (max-width: 800px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const Home = () => {
  return (
    <Container>
      <IntroText /> 
    </Container>
  );
}

export default Home