import React from 'react';
import Image from './Images';

function Buildings(){
    return(
        <>

            <h3>This is the Image of a Building</h3>
            <br/>
            <div className="buildings">
            <Image/>
            </div>

            <p>As we learned in our previous lesson, a common technique is to make the max-width of an image 100%. <br/>
            This will enable the image to become smaller in size than the box but not larger. This technique will work with other replaced elements.</p>
         
        </>
    );
}

export default Buildings;