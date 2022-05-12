import styled from 'styled-components';

const Wrapper = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit:cover;
  height: 251px;
  border-radius: 21px;
  animation: myne 0.5s;
  cursor: pointer;
  
  :hover {
      opacity: 0.8;
  }
  @keyframes myne {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }

`;

export default Wrapper;