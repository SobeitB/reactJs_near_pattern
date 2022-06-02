import { RouterProvider } from "./router"
import { MoralisProvider } from 'react-moralis';

export const OtherProvider = () => {
   return(
      <MoralisProvider
         serverUrl="https://wc1asdlezmub.usemoralis.com:2053/server"
         appId="T3u51dhDHamZkCqUkD2KIqydSEK22hOeqbLg7O3D"
      >
         <RouterProvider />
      </MoralisProvider>
   )
}