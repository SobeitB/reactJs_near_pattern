import {Container} from 'react-bootstrap';
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';
import s from './Error404.module.css'

export const Error404 = () => {
   return(
      <div className="bodyPages py-5">
         <Container className="text-center">
            <img src={HeaderTop} alt="" className="img-fluid" />
               <h1 className={`title ${s.title}`}>Error404</h1>
               <p className={s.error}>page not found</p>
            <img src={HeaderBot} alt="" className="img-fluid" />
         </Container>
      </div>
   );
}