import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 511px;
   width: 100%;
   background-image: url(${({ image }) => image});
   position: relative;
   background-size: 105% 99%;
   border-radius: 6px;
   background-position: center;
   animate: ani 1s;

   @keyframes ani {
      from {
         opacity: 0.8;
      }
      to {
         opacity: 1;
      }
   }
`;

export const Content = styled.div`
  padding: 2px;
  position: absolute;
  max-width: 351px;
  margin-top: 315px;
  
  color: white;
  font-size: 22px;

`;

//export default { Wrapper, Content };