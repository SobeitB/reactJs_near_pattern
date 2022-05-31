import getConfig from './config'

export const nearConfig = getConfig(process.env.ENVIRONTMENT)

export function logout() {
   window.walletConnection.signOut()
   window.location.replace(window.location.origin + window.location.pathname)
}
 
export function login() {
   window.walletConnection.requestSignIn(nearConfig.contractName)
}