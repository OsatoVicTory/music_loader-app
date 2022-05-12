import React, { useState, useEffect } from 'react';

import { Wrapper, Content, Img  } from './Input.styles';
import Pep from "./pepsi002.png";

const Input = ({ setSearch }) => {
    const [imag, setImag] = useState(false);
    const [state, setState] = useState('');
    //const [load, setLoad] = useState(false);

    useEffect(() => {
        setImag(true);
        const timer = setTimeout(function() {
            setSearch(state);
            setImag(false);       
        }, 1700);

        


        return () => clearTimeout(timer);


    }, [state, setSearch]);

    return (
        
        <Wrapper>
          <Content>
            <Img src={Pep} ani={imag} alt='pep' />
            <input 
              type='text'
              onChange={event => setState(event.target.value)} />
          </Content>
        </Wrapper>
      
    )
}

export default Input;
