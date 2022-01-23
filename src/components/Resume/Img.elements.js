import styled from "styled-components";

export const ImgWrapper = styled.div`
background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522' )};
max-width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 100%;
`;