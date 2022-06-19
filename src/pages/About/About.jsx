import {
   Container,
   ImgTitle,
   Text,
   BodyMap,
   ImgMap,
   Title,
   BodyMapText,
} from './About.styled'
import title from './img/title.png'
import map from './img/map.png'

const About = () => {
   return(
      <Container>
         <ImgTitle 
            src={title}
            alt=""
         />
         <Text top="32px">Holistic Pilgrim is a metaverse of projects with unique lore.</Text>
         <Text top="16px">The essence of the holistic pilgrim is tied to two things. The first is a wonderful world in which absolutely indescribable things can happen, magic that will envelop you the moment you enter this world. For us, this project is like something from childhood, when we all saw more than it seems now, when our world seemed too magical and big for us, and any actions were connected, like in a children's game. Our goal is for people to get into the world of Holistic Pilgrim again to be able to experience the same emotions as in their childhood, hence the desire to create this world in the worldland game arose.</Text>
         <Text top="16px">The second is an interested community, which is connected by common interests, we create intrigues and quests and people solve them. This community is like a house in which we are all a big friendly family, we communicate on interesting topics and our riddles only stir up interest in the future. It was important to create a society of interested people who would be waiting and interested in the same way as in their childhood before the upcoming game.</Text>
      
         <BodyMap>
            <ImgMap 
               src={map}
               alt=""
            />

            <BodyMapText>
               <Title>Where are we?</Title>
               <Text top="8px">The essence of the holistic pilgrim is tied to two things. The first is a wonderful world in which absolutely indescribable things can happen, magic that will envelop you the moment you enter this world. For us, this project is like something from childhood, when we all saw more than it seems now, when our world seemed too magical and big for us, and any actions were connected, like in a children's game. Our goal is for people to get into the world of Holistic Pilgrim again to be able to experience the same emotions as in their childhood, hence the desire to create this world in the worldland game arose.</Text>
            </BodyMapText>
         </BodyMap>

         <div>
            <Title top="32px">How do I get a Wizard?</Title>
            <Text top="16px">Holistic Pilgrim is a metaverse of projects with unique lore.</Text>
            <Text top="16px">The essence of the holistic pilgrim is tied to two things. The first is a wonderful world in which absolutely indescribable things can happen, magic that will envelop you the moment you enter this world. For us, this project is like something from childhood, when we all saw more than it seems now, when our world seemed too magical and big for us, and any actions were connected, like in a children's game. Our goal is for people to get into the world of Holistic Pilgrim again to be able to experience the same emotions as in their childhood, hence the desire to create this world in the worldland game arose.</Text>
            <Text top="16px" bottom="51px">The second is an interested community, which is connected by common interests, we create intrigues and quests and people solve them. This community is like a house in which we are all a big friendly family, we communicate on interesting topics and our riddles only stir up interest in the future. It was important to create a society of interested people who would be waiting and interested in the same way as in their childhood before the upcoming game.</Text>
         </div>
      </Container>
   )
}

export default About;