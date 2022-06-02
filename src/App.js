import { OtherProvider } from "./providers";
import {useLocation} from 'react-router-dom'
import {Header} from './components/Header'
import Footer from "./components/Footer";

function App() {
  const {pathname} = useLocation()

  return(
    <div className={pathname === "/" ? 'plcontent2' :'plcontent'}>
      <Header />
      <OtherProvider />
      <Footer />
    </div>
  )
}

export default App;
