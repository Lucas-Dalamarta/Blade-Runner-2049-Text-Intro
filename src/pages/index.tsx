import styled from 'styled-components'

import IntroText from '../Components/IntroText'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <IntroText /> 
    </Container>
  );
}

export default Home