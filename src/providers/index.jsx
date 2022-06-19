import { RouterProvider } from "./router"
import { MoralisProvider } from 'react-moralis';
import {NotificationProvider} from "web3uikit";

export const OtherProvider = () => {
   return(
      <MoralisProvider
         serverUrl="https://wc1asdlezmub.usemoralis.com:2053/server"
         appId="T3u51dhDHamZkCqUkD2KIqydSEK22hOeqbLg7O3D"
      >
         <NotificationProvider>
            <RouterProvider />
         </NotificationProvider>
      </MoralisProvider>
   )
}