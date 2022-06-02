import {
   Routes,
   Route,
} from "react-router-dom";

import {Suspense, lazy} from 'react';
import {Loader} from '../components/Loader/Loader'
import { IsNft } from "./isNft";
import { IsAdmin } from "./isAdmin";
import { Error404 } from "../pages/Error404/Error404";
const Home = lazy(() => import ('../pages/Home'));
const Pilgrim = lazy(() => import ('../pages/Pilgrim/Pilgrim'));
const Comics = lazy(() => import ('../pages/Comics/Comics'));
const PilgrimDetails = lazy(() => import ('../pages/PilgrimDetails/PilgrimDetails'));
const Lore = lazy(() => import ('../pages/Lore/Lore'));
const AdminPamel = lazy(() => import ('../pages/AdminPamel/AdminPamel'));

export const RouterProvider = () => {
   return(
      <Routes>
         <Route path="/" element={
            <Suspense fallback={<main className="mainLoader"><Loader /></main>}>
              <main className="main">
                 <Home />
               </main>
            </Suspense>
         } />

         <Route path="/pilgrim" element={
            <Suspense fallback={<main className="mainLoader"><Loader /></main>}>
              <main className="main">
                 <Pilgrim />
               </main>
            </Suspense>
         } />

         <Route path="/pilgrim/:token_id" element={
            <Suspense fallback={<main className="mainLoader"><Loader /></main>}>
              <main className="main">
                 <PilgrimDetails />
               </main>
            </Suspense>
         } />

         <Route path="/comics" element={
            <Suspense fallback={<main className="mainLoader"><Loader /></main>}>
              <main className="main">
                 <Comics />
               </main>
            </Suspense>
         } />

         <Route path="/comics/:token_id/:pages" element={
            <Suspense fallback={<main className="mainLoader"><Loader /></main>}>
              <main className="main">
                  <IsNft>
                     <Lore />
                  </IsNft>
               </main>
            </Suspense>
         } />

         <Route path="/adminPanel" element={
            <Suspense fallback={<main className="mainLoader"><Loader /></main>}>
              <main className="main">
                  <IsAdmin>
                     <AdminPamel />
                  </IsAdmin>
               </main>
            </Suspense>
         } />

         <Route path='*' element={
            <main className="main">
               <Error404 />
            </main>
         } />
      </Routes>
   );
}