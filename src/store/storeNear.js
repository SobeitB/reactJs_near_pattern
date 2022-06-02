import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import {nearConfig} from '../utils/near/utilsNear'
import {NFT_CONTRACT_ID} from '../env'

export async function initContract() {

   const near = await connect(
      Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig)
   )

   window.walletConnection = new WalletConnection(near)

   window.accountId = window.walletConnection.getAccountId()

   window.contract = new Contract(window.walletConnection.account(), nearConfig.contractName, {
      viewMethods: ['get_story'],
      changeMethods: ['set_story'],
   })

   window.contract_nft = new Contract(window.walletConnection.account(), NFT_CONTRACT_ID, {
      viewMethods: ["nft_total_supply","nft_tokens_for_owner","nft_tokens","nft_metadata"],
      changeMethods: [""],
   });
}