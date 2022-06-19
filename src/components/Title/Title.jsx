import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';

export const Title = ({title}) => (
   <div style={{"marginTop": "32px"}}>
      <img src={HeaderTop} alt="" className="img-fluid" />
      <h1 className="title">{title}</h1>
      <img src={HeaderBot} alt="" className="img-fluid" />
   </div>
)