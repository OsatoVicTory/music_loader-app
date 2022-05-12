import React, { useState }from 'react';


import Wrapper from './Dots.styles';
import PepThree from '../pepsi003.png';
import PepTwo from '../pepsi002.png';
import PepOne from '../pepsi001.png';


const Dot = () => {
    const list = [
        {img: PepOne, name: 'PlayLists'},
        {img: PepTwo, name: 'Albums'},
        {img: PepThree, name: 'Artistes'}
    ];
    const l = '>'

    const [dots, setDots] = useState(list);


    return (
      <Wrapper>
            
            {dots.map(dot => (
                <div key={Math.random()}>                
                  <img src={dot.img} alt='sc' />
                  <p>{dot.name}</p>
                  <h1>{l}</h1>
                </div>
            ))}
      </Wrapper>
    )
}

export default Dot;

