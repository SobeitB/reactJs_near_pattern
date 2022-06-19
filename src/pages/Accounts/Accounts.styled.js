import styled from "styled-components";
import bg from './img/bgAcc.png'
import bgBtn from './img/bgBtn.png'
import borderBtn from '../../components/NoNft/img/border.png'
import BtnPagination from './img/btnPagination.png'

export const BodyAccounts = styled.div`
   background-image: url(${bg});
   background-repeat: no-repeat;
   background-position: 50% 50%;
   background-size: 100% 100%;
   width: 100%;
   height: 446.12px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media (max-width:1010px) {
      width: 90%;
   }
`

export const AccountsLayout = styled.div`
   width: 85%;
   height: 268.65px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;

   @media (max-width:1010px) {
      width: 90%;
   }
`

export const Heroes = styled.div.attrs((props) => props)`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 189.33px;

   @media (max-width:970px) {
      width: 159.33px;
   }

   @media (max-width:870px) {
      width: 140px;
   }
   /* border:1px solid ${(props) => props.isSelected ? '#f8cb2c' : 'none'}; */
`

export const HeroesName = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 16px;
   text-align: center;
   color: #543927;
`

export const HeroeImg = styled.img`
   width: 100%;
   height: 196.71px;
   margin-top:8px;
   margin-bottom:16px;
`

export const HeroeSelectBody = styled.div`
   width: 163.02px;
   height: 31.96px;

   @media (max-width:870px) {
      width: 130px;
   }
`

export const HeroeSelect = styled.button`
   width: 100%;
   height: 31.96px;
   font-style: normal;
   font-weight: 400;
   font-size: 20.6562px;
   line-height: 21px;
   color: #543927;
   border-image:url(${borderBtn}) 19 / 19px round;

   &:hover{
      background-image: url(${bgBtn});
      background-position: 50% 50%;
      color: #E5CDB4;
   }
`

export const Pagination = styled.div`
   width: 78px;
   height: 32px;
   position: relative;
   top:28px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const ButtonPagination = styled.button`
   width: 32.6px;
   height: 32.6px;
   background:url(${BtnPagination});
   border:none;
`

export const IsSelectedNft = styled.div`
   width:25px;
   height:25px;
   position: absolute;
   top:40px;
   right:10px;
   color:#d6d6d6;
   background-color: rgb(75,75,75,0.8);
   font-size:13px;
   font-weight: bold;

   display: flex;
   align-items: center;
   justify-content: center;
`