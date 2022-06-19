import market from '../NoNft/img/market.png'

export const BtnMarket = () => {
   return(
      <button className="not__nft_btn">
         <img  
            className="not__nft_market"
            src={market}
            alt=""
         />
         to market
      </button>
   );
}