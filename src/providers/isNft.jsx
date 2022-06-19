import {useState, useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export const IsNft = ({children}) => {
   const [isNft, setIsNft] = useState('loading');
   const navigate = useNavigate()

   useEffect(() => {
      async function getComics() {
         if(window.accountId.length === 0) {
            navigate('/');
            return;
         }

         const isOwner = await window.contract_nft.nft_tokens_for_owner({"account_id":window.accountId,"from_index":"0","limit":1});
         setIsNft(isOwner.length > 0) // mainnet
         
         // const all_comics = await window.contract_nft.nft_tokens();
         // let stateIsNft = false;
         // for(let i = 0; i < all_comics.length; i++) {
         //    if(all_comics[i].owner_id === window.accountId) {
         //       stateIsNft = true;
         //       break;
         //    }
         // }
         // setIsNft(stateIsNft) // testnet
      }

      getComics()
   }, [])
   
   return(
      <>
         {isNft && isNft !== 'loading' && children}
         {!isNft && <Navigate to="/comics" />}
      </>
   )
}