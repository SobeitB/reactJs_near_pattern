import {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';

export const IsNft = ({children}) => {
   const [isNft, setIsNft] = useState('loading');

   useEffect(() => {
      async function getComics() {
         const all_comics = await window.contract_nft.nft_tokens();
         let stateIsNft = false;
         for(let i = 0; i < all_comics.length; i++) {
            if(all_comics[i].owner_id === window.accountId) {
               stateIsNft = true;
               break;
            }
         }
         setIsNft(stateIsNft)
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