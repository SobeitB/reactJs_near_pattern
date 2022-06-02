import {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {ADMIN_ACCS} from '../env.js'

export const IsAdmin = ({children}) => {
   const [isAdmin, setIsAdmin] = useState('loading');

   useEffect(() => {
      async function getAdmins() {
         for(let admin in ADMIN_ACCS) {
            if(ADMIN_ACCS[admin] === window.accountId) {
               setIsAdmin(true)
            }
         }
      }

      getAdmins()
   }, [])

   return(
      <>
         {isAdmin && isAdmin !== 'loading' && children}
         {!isAdmin && <Navigate to="/" />}
      </>
   )
}