import {useState, useEffect} from 'react';
import {Error404} from '../pages/Error404/Error404.jsx'
import { 
   useMoralis,
} from "react-moralis";
import {useParams} from 'react-router-dom'

export const IsPageComics = ({children}) => {
   const [isPages, setIsPages] = useState('loading');
   const {Moralis} = useMoralis();
   const {token_id, pages} = useParams()

   useEffect(() => {
      async function getComics() {
         const Comics = Moralis.Object.extend("comics");
         const query = new Moralis.Query(Comics);
         const comics = await query
         .equalTo("count", token_id)
         .first();

         console.log(
            comics !== undefined 
            &&
            comics.attributes.pages.length >= pages
         )
         setIsPages( 
            comics !== undefined 
            &&
            comics.attributes.pages.length >= pages
         ) 
      }

      getComics()
   }, [token_id, pages])
   
   return(
      <>
         {isPages && isPages !== 'loading' && children}
         {!isPages && <Error404 />}
      </>
   )
}