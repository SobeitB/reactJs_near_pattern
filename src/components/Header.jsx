import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import LogoP from '../assets/img/logo.svg';
import { login, logout } from "../utils/near/utilsNear";
import active_pages from './img/active_pages.png'
import pages from './img/pages.png'

import {useLocation, Link} from 'react-router-dom'
import {useMemo} from 'react'
import {ADMIN_ACCS} from '../env.js'

export const Header = () => {
   const {pathname} = useLocation()

   let connectionButton = useMemo(() => {
      if (window.accountId) {
         return (<Button variant="outline-light" onClick={logout} >{window.accountId}</Button>);
      }else{
         return (<Button variant="outline-warning" onClick={login}>Connect</Button>);
      }
   }, []);

   return(
      <div className={pathname ==="/" ? 'header2' :'header'}>
         <Navbar variant="dark" expand="md" className="text-center">
         <Container>
            <Link style={{"textDecoration": "none"}} to="/">
               <div style={{display: "flex", alignItems: "center"}}>
               <div>
                  <img src={LogoP} alt="" />
               </div>
               <div className="ps-4">
                  <span className='link_home'>HOLISTIC <br/> PILGRIM</span>
               </div>
               </div>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto me-auto">
               <span className='header_link_body'>
                  <Link className='header_link' to="/">Home</Link>
                  <img 
                     className="header_img" 
                     src={pathname === "/" ? active_pages : pages} 
                     alt="" 
                  />
               </span>

               <span className='header_link_body'>
                  <Link className='header_link' to="/pilgrim">Pilgrim</Link>
                  <img 
                     className="header_img" 
                     src={pathname ==="/pilgrim" ? active_pages : pages} 
                     alt="" 
                  />
               </span>

               <span className='header_link_body'>
                  <Link className='header_link' to="/comics">Comics</Link>
                  <img 
                     className="header_img" 
                     src={pathname ==="/comics" ? active_pages : pages}  
                     alt="" 
                  />
               </span>

               {ADMIN_ACCS.map((admin) => {
                  if(admin === window.accountId) {
                     return (
                        <span className='header_link_body'>
                           <Link className='header_link' to="/adminPanel">Admin Panel</Link>
                           <img 
                              className="header_img" 
                              src={pathname ==="/adminPanel" ? active_pages : pages}  
                              alt="" 
                           />
                        </span>
                     )
                  } else {return ''}
               })}

               </Nav>
               <div className="d-flex justify-content-center">
                  {connectionButton}
               </div>
            </Navbar.Collapse>
         </Container>
         </Navbar>
      </div>
   )
}