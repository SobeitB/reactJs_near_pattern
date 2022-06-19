import styled from "styled-components";

export const BodyMap = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 1027px;
   margin:32px 0 52px 0;

   @media (max-width:1050px) {
      width: 90%;
      height: 950px;
   }

   @media (max-width:950px) {
      width: 90%;
      height: 890px;
   }

   @media (max-width:850px) {
      width: 90%;
      height: 800px;
   }

   @media (max-width:750px) {
      width: 90%;
      height: 700px;
   }

   @media (max-width:650px) {
      width: 90%;
      height: 600px;
   }

   @media (max-width:550px) {
      width: 90%;
      height: 500px;
   }

   @media (max-width:450px) {
      width: 90%;
      height: 400px;
   }

   @media (max-width:350px) {
      width: 90%;
      height: 300px;
   }
`
export const WhiteListImg = styled.img`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index:0;
`

export const MapImg = styled.img`
   width: 85%;
   position: relative;
   z-index:1;
`