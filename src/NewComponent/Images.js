import React from 'react';
import image from './mest.jpeg';

function Image(){
    return(

        <a href="#">
            <img src={require('./mest.jpeg')}/>
            </a>
    );
}

export default Image;