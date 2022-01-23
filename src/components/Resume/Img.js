import React from 'react';
import { ImgWrapper, Img } from './Img.elements';

const ResumeIMG = ({
    img,
    alt,
    lightBg
    }) => {
  return (
    <ImgWrapper lightBg={lightBg}>
        <Img src={img} alt={alt} />
    </ImgWrapper>
  )
}

export default ResumeIMG;
