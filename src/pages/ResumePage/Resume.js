import React from 'react';
import { homeObjOne } from './Data';
import  ResumeIMG  from '../../components/Resume/Img';

const Resume = () => {
    return (
        <>
            <ResumeIMG {...homeObjOne} />
        </>
    )
}

export default Resume
