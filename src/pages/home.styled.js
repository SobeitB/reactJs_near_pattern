import styled from 'styled-components'
import btn from '../assets/img/exploer.png'

export const Title = styled.h1`
   font-style: normal;
   font-weight: 500;
   font-size: 54px;
   line-height: 55px;
   text-align: center;
   color: #FFFFFF;

   @media (max-width:580px) {
      font-size: 40px;
      line-height: 50px;
   }

   @media (max-width:360px) {
      font-size: 35px;
   }
`

export const Text = styled.p`
   width: 750px;
   font-style: normal;
   font-weight: 500;
   font-size: 19px;
   line-height: 24px;
   text-align: center;
   color: #FFFFFF;
   margin-top:49px;

   @media (max-width:992px) {
      width: 500px;
   }

   @media (max-width:540px) {
      width: 400px;
      font-size: 18px;
   }

   @media (max-width:440px) {
      width: 350px;
      font-size: 17px;
      line-height: 22px;
   }

   @media (max-width:420px) {
      width: 270px;
   }

   @media (max-width:360px) {
      font-size: 16px;
      width: 220px;
   }
`

export const ExploerBtn = styled.button`
   border:none;
   background:none;
   background-image: url(${btn});
   width: 170px;
   height: 48.28px;
   margin-top:50px;
   cursor:pointer;
`