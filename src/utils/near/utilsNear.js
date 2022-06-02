import getConfig from './config'
import {ENVIRONTMENT} from '../../env'

export const nearConfig = getConfig(ENVIRONTMENT)
export function logout() {
   window.walletConnection.signOut()
   window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
   window.walletConnection.requestSignIn(nearConfig)
}