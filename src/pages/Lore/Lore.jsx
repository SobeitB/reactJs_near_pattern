import s from './Lore.module.css'
import { Container } from 'react-bootstrap';
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';
import comics from './img/comics.png';
import { PaginationComp } from '../../components/pagination/Pagination';

const Lore = () => {

   return(
      <>
         <div className="bodyPages py-5">
            <Container className="text-center">
               <img src={HeaderTop} alt="" className="img-fluid" />
                  <h1 className={s.title}>The Story of the First Pilgrim</h1>
               <img src={HeaderBot} alt="" className="img-fluid" />
               <PaginationComp />

               <img 
                  src={comics}
                  style={{"marginTop": "59px"}}
                  alt=""
               />
               <PaginationComp />
            </Container>
         </div>
      </>
   );
}

export default Lore;