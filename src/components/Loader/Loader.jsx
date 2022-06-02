import "./Loader.css";

export const Loader = () => {
   return(
      <div className="bodyLoader">
         <h2>Loading...</h2>
         <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
   );
}