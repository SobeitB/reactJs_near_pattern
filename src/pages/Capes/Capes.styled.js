import styled from "styled-components";

export const Container = styled.div`
   max-width:998px;
   height:100%;
   margin:0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const TextTitle = styled.p`
   width: 100%;
   font-family: 'Alagard';
   font-style: normal;
   font-weight: 500;
   font-size: 16.8263px;
   line-height: 17px;
   text-align: center;
   color: #543927;
   margin-top:32px;

   @media (max-width:1040px) {
      width:80%;
   }

   @media (max-width:600px) {
      line-height: 20px;
   }
`

export const ContainerCapes = styled.div`
   max-width:930px;
   margin:0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;

   @media (max-width:906px) {
      max-width:800px;
   }

   @media (max-width:680px) {
      max-width:600px;
   }

   @media (max-width:460px) {
      max-width:350px;
   }

   margin-bottom:54px;
`

export const CapesItems = styled.div`
   width: 196.71px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 32px 45px 0 0;

   &:nth-child(4n) {
      margin: 32px 0 0 0;
   }

   @media (max-width:921px) {
      margin: 32px 40px 0 0;
   }

   @media (max-width:906px) {
      &:nth-child(4n) {
         margin: 32px 40px 0 0;
      }

      &:nth-child(3n) {
         margin: 32px 0px 0 0;
      }
   }

   @media (max-width:680px) {
      &:nth-child(3n) {
         margin: 32px 40px 0 0;
      }

      &:nth-child(2n) {
         margin: 32px 0px 0 0;
      }
   }

   @media (max-width:460px) {
      &:nth-child(2n) {
         margin: 32px 40px 0 0;
      }

      &:nth-child(1n) {
         margin: 32px 0px 0 0;
      }
   }
`

export const CapesItemsTitle = styled.h3`
   margin:0 auto;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 16px;
   text-align: center;
   color: #543927;
`

export const CapesItemsImg = styled.div`
   width:100%;
   height: 196.71px;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top:8px;
`

