import {Container, TextTitle} from '../Capes/Capes.styled'
import {BodyMap, WhiteListImg, MapImg} from './Map.styled'
import s from './Map.module.css'
import {Title} from '../../components/Title/Title'
import map from './img/map.png'
import whiteList from './img/whiteList.png'

const Map = () => {
   return (
      <Container>
         <Title title="Map" />
         <TextTitle>The essence of the holistic pilgrim is tied to two things. The first is a wonderful world in which absolutely indescribable things can happen, magic that will envelop you the moment you enter this world. For us, this project is like something from childhood, when we all saw more than it seems now, when our world seemed too magical and big for us, and any actions were connected, like in a children's game. Our goal is for people to get into the world of Holistic Pilgrim again to be able to experience the same emotions as in their childhood, hence the desire to create this world in the worldland game arose.</TextTitle>
      
         <BodyMap >
            <WhiteListImg
               src={whiteList}
               alt=""
            />
            <MapImg 
               src={map}
               alt=""
            />
         </BodyMap>
      </Container>
   )
}

export default Map;