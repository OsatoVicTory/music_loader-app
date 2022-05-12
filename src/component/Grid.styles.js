import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 755px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
      color: grey;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    
    min-height: 251px;
    grid-gap: 2rem;
    color: black;
  }

`;

export default Wrapper;
/*export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  color: black;

`;*/

