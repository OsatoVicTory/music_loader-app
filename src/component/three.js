import React from 'react';

import PepOne from '../pepsi001.png';
import PepTwo from '../pepsi002.png';
import PepThree from '../pepsi003.png';
import { Wrapper } from './three.styles';

const Three = ({ serve }) => (
     <Wrapper type="button" onClick={serve}>
         <img src={PepOne} alt='one' />
         <img src={PepTwo} alt='tone' />
         <img src={PepThree} alt='pone' />
     </Wrapper>
)

export default Three;