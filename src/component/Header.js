import React, { useState, useEffect }from 'react';

import Pep from '../logo.png';
import { Wrapper, Content } from './Header.styles';
import Three from './three';
import Dot from './Dots';
//import styledComponentsCjs from 'styled-components';


const Header = () => {

    const [dot, setDot] = useState(false);
    const [click, setClick] = useState(false);
     useEffect(() => {
       
       function handle() {
         setDot(prev => !prev);       
       }
       if(click) {
         handle();
         setClick(false);
       }
     }, [click, dot]);

    return (
      <>
        <Wrapper >
          
          <img src={Pep} alt="head" />
          <Content> PEPSI ALBUM LISTS</Content>
          <Three serve={() => setClick(true)}></Three>
          
        </Wrapper>
        {dot && <Dot />}
      </>
    )
};

export default Header;