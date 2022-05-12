import React from 'react';

import { Wrapper, Content } from './Hero.styles';


const Hero = ({ chart }) => (
    <Wrapper image={chart.result}>
      <Content>
        <h1>Title : {" "+chart.title}</h1>
        <h2>Artiste : {" "+chart.artistie}</h2>
      </Content>
    </Wrapper>
);


export default Hero;