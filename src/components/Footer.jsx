import { Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom'

function Footer() {
   const {pathname} = useLocation()
   return (
      <div className={pathname === "/" ? 'footer2' :'footer'}>
         <Container>
            <h1 className="text-center" style={{paddingTop: "60px"}}>* HOLISTIC PILGRIMS *</h1>
         </Container>
      </div>
   );
}

export default Footer;
