import { BtnMarket } from '../ButtonMarket/ButtonMarket'
import union from './img/Union.png'
import './NoNft.css'

export const NoNft = ({text}) => {
   return(
      <div className="not__nft_body">
         <img 
            className="title_skelet"
            alt="" 
            src={union}
         />
         <h1 className="not__nft_title">{text}</h1>
            <a
               href="https://paras.id/token/623c2cd4294f600e58f46fa2.astrogenfunds.near"
               target="_blank"
               rel="noreferrer"
            >
               <BtnMarket />
            </a>
      </div>
   )
}