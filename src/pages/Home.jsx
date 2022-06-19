import { Container, Row, Col } from 'react-bootstrap';
import {
   Title,
   Text,
   ExploerBtn,
} from './home.styled'
import './home.css';

const Home = () => {
   
   return(
      <div className="pilgrim py-5">
         <Container>
         <Row className="justify-content-center text-center">
            <Col sm={12} md={6} className="bgdrop">
               <Title>Welcome to the <br />Holistic Pilgrim</Title>
               <Text>
                  Forgotten Runes Wizard's Cult is a decentralized approach to world-building. Worlds like Middle Earth, the Star Wars Galaxy, and Westeros were built by singular, lone creators.
                  <p style={{"marginTop": "25px"}} />
                  Our Runiverse, however, is built by thousands of creators in our community.
                  <p style={{"marginTop": "25px"}} />
                  With the use of blockchain technologies, our world grows larger everyday.
               </Text>

               <ExploerBtn />
            </Col>
         </Row>
         </Container>
      </div>
   )
}

export default Home;