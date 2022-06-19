import {
   Container,
   TextTitle,
   ContainerCapes,
   CapesItems,
   CapesItemsTitle,
   CapesItemsImg,
} from './Capes.styled'
import s from './capes.module.css'
import capesImg from './img/Layer 1.png'
import market from '../../components/NoNft/img/market.png'
import { Title } from '../../components/Title/Title';

const Capes = () => {
   return(
      <Container>
         <Title title="Magic Capes" />

         <TextTitle>The essence of the holistic pilgrim is tied to two things. The first is a wonderful world in which absolutely indescribable things can happen, magic that will envelop you the moment you enter this world. For us, this project is like something from childhood, when we all saw more than it seems now, when our world seemed too magical and big for us, and any actions were connected, like in a children's game. Our goal is for people to get into the world of Holistic Pilgrim again to be able to experience the same emotions as in their childhood, hence the desire to create this world in the worldland game arose.</TextTitle>
         <ContainerCapes>
            <CapesItems>
               <CapesItemsTitle>Layer 1</CapesItemsTitle>
               <CapesItemsImg className={s.CapesItemsImg}>
                  <img src={capesImg} alt="" />
               </CapesItemsImg>

               <button 
                  style={{
                     "background":"none",
                     "width": "163px",
                     "height": "32.73px",
                     "marginTop":"8px"
                  }}
                  className="not__nft_btn"
               >
                  <img  
                     width="24.29px"
                     height="24.29px"
                     className="not__nft_market"
                     src={market}
                     alt=""
                  />
                  <span
                     style={{
                        "marginLeft":"16px",
                        "fontSize": "20.5702px",
                     }}
                  >
                     to market
                  </span>
               </button>
            </CapesItems>
         </ContainerCapes>
      </Container>
   );
}

export default Capes;