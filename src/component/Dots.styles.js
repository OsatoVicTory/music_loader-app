import styled from 'styled-components';

const Wrapper = styled.div`
   width: 100%;
   height: 173px;
   margin-top: -3px;
   z-index: 81;
   background-color: grey;
   border-radius: 11px;

   div {
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       max-height: 85px;
       max-width: 99%;
       border-bottom: 1px solid white;
       
       
   }

       img {
           margin-top: 15px;
           height: 25px;
           width: 16px;
       }
       p {
           font-size: 18px;
           font-weight: 655;
           color: white;
       }
       h1 {
           font-size: 25px;
           
           color: white;
           font-weight: bold;
           margin-top: 15px;
           cursor: pointer;

           :hover {
               color: red;
           }
       }
   }


`;
 
export default Wrapper;
