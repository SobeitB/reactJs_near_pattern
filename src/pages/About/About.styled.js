import styled from "styled-components";

export const Container = styled.div`
   width: 54.7%;
   margin:0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: 1090px) {
      width: 60%;
   }

   @media (max-width: 1000px) {
      width: 65%;
   }

   @media (max-width: 820px) {
      width: 70%;
   }

   @media (max-width: 650px) {
      width: 80%;
   }

   @media (max-width: 550px) {
      width: 85%;
   }

   @media (max-width: 450px) {
      width: 95%;
   }
`

export const ImgTitle = styled.img`
   width: 100%;
   height: 212px;
   margin-top:32px;
`

export const Text = styled.p.attrs((props) => props)`
   width: 100%;
   margin:0 auto;
   font-style: normal;
   font-weight: 500;
   font-size: 16.8263px;
   line-height: 17px;
   color: #543927;
   margin-top:${(props) => props.top};
   margin-bottom:${(props) => props.bottom};
`

export const Title = styled.h2.attrs((props) => props)`
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 31px;
   color: #543927;
   margin-top:${(props) => props.top};
`

export const BodyMap = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-top: 32px;

   @media (max-width: 820px) {
      flex-direction:column;
      align-items: center;
   }
`

export const BodyMapText = styled.div`
   margin-left:20px;

   @media (max-width: 820px) {
      margin-top:16px;
   }
`

export const ImgMap = styled.img`
   max-width: 250px;
   height: 256px;

   @media (max-width: 820px) {
      max-width: 350px;
      height: 356px;
   }
`


