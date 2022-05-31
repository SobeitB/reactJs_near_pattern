import {
   Routes,
   Route,
} from "react-router-dom";

import {Suspense, lazy} from 'react';

const Home = lazy(() => import ('../pages/Home'));

export const RouterProvider = () => {
   return(
      <Routes>
         <Route path="/" element={
            <Suspense fallback={<p>loading</p>}>
              <Home />
            </Suspense>
         } />
      </Routes>
   );
}