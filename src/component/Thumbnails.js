import React from 'react';

import Wrapper from './Thumbnails.styles';

const Thumbnails = ({ image, title, change }) => (
    <div>
        <Wrapper src={image} alt='thumbnail' onClick={change}></Wrapper>
        <p>{title}</p>
    </div>
);


export default Thumbnails;