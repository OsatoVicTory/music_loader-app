import React from 'react';

import Wrapper from './Grid.styles';



const Grid = ({ stat, children }) => (
   <Wrapper>
       <h1>{stat}</h1>
       <div>{children}</div>
   </Wrapper>
)

export default Grid;