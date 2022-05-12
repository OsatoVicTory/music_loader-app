import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1px;
  margin-left: 472px;
  border: 5px solid white;
  border-top: 5px solid grey;
  border-radius: 51%;
  width: 51px;
  height: 51px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }


`;

export default Wrapper;