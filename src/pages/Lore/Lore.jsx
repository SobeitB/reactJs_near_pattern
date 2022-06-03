import s from './Lore.module.css'
import { Container } from 'react-bootstrap';
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';
import { PaginationComp } from '../../components/pagination/Pagination';
import {useState, useCallback, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Modal, Button, Form} from 'react-bootstrap'
import { 
   useMoralisFile, 
   useMoralis,
} from "react-moralis";
import {ADMIN_ACCS} from '../../env.js'

const Lore = () => {
   const {login, Moralis} = useMoralis();
   const {saveFile} = useMoralisFile();
   const [show, setShow] = useState(false);
   const [comicsState, setComicsState] = useState(false);
   const [imgComics, setImgComics] = useState(false);

   const {token_id, pages} = useParams()
   const navigate = useNavigate()
   const handleClose = useCallback(() => setShow(false), []);
   const handleShow = useCallback(() => setShow(true), []);

   useEffect(() => {
      async function getImgComics() {
         const Comics = Moralis.Object.extend("comics");
         const query = new Moralis.Query(Comics);
         const comics = await query
         .equalTo("count", token_id)
         .first();

         setComicsState(comics.attributes.pages[pages-1])
      }

      getImgComics()
   }, [pages])

   const addPage = useCallback(async () => {
      await login("admin", "admin")

      const Comics = Moralis.Object.extend("comics");
      const query = new Moralis.Query(Comics);
      const comicsAll = await query
      .equalTo("count", token_id)
      .first();

      let pages = comicsAll.attributes.pages

      await saveFile("comicsPage.png", imgComics, {
         type: "image/png",
         onSuccess: (result) => {
            pages = [...pages, result._url]
         },
         onError: (error) => console.log(error),
      })

      comicsAll.set("Title", comicsAll.attributes.Title)
      comicsAll.set("File", comicsAll.attributes.File)
      comicsAll.set("pages", pages)
      comicsAll.set("count", comicsAll.attributes.count)
      comicsAll.save()

      handleClose()
   }, [imgComics, login, saveFile, Moralis, handleClose, token_id]);

   const deleateComics = useCallback(async () => {
      const Comics = Moralis.Object.extend("comics");
      const query = new Moralis.Query(Comics);
      const comics = await query
      .equalTo("count", token_id)
      .first();

      comics.destroy().then(
         (myObject) => {
            console.log(myObject)
         },

         (error) => {console.log(error)}
      )

      navigate('/comics')
   }, [Moralis, navigate, token_id])

   const deleatePage = useCallback(async () => {
      const Comics = Moralis.Object.extend("comics");
      const query = new Moralis.Query(Comics);
      const comics = await query
      .equalTo("count", token_id)
      .first();

      console.log(comics.attributes.pages)
      comics.attributes.pages.splice(pages - 1, 1)
      let updatePages = comics.attributes.pages

      
      comics.set("pages", updatePages);
      comics.save();

      navigate(`/comics`)
   }, [Moralis, navigate, token_id])

   return(
      <>
         <div className="bodyPages py-5">
            <Container className="text-center">
               <img src={HeaderTop} alt="" className="img-fluid" />
                  <h1 className={s.title}>The Story of the First Pilgrim</h1>
               <img src={HeaderBot} alt="" className="img-fluid" />
               <PaginationComp />

               {comicsState &&
                  <img 
                     src={comicsState}
                     style={{
                        "marginTop": "59px",
                        "width":"80%"
                     }}
                     alt=""
                  />
               }
               
               <PaginationComp />

               {ADMIN_ACCS.map((admin) => {
                  if(admin === window.accountId) {
                     return (
                        <div className={s.contAdminPanel}>
                           <div className={s.btnBody}>
                              <button
                                 onClick={deleatePage} 
                                 className={`${s.btn} ${s.btnDeleate}`}
                              >deleate this page</button>
                           </div>

                           <div className={s.btnBody}>
                              <button 
                                 onClick={deleateComics}
                                 className={`${s.btn} ${s.btnDeleate}`}
                              >deleate this comics</button>
                           </div>

                           <div className={s.btnBody}>
                              <button 
                                 onClick={handleShow} 
                                 className={`${s.btn} ${s.addPages}`}
                              >add pages comics</button>
                           </div>
                        </div>
                     )
                  } else {return ''}
               })}

               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Add pages comics</Modal.Title>
                  </Modal.Header>

                  <form onSubmit={(Event) => {
                     Event.preventDefault() 
                     addPage()
                  }}>
                     <Modal.Body>
                        <Form.Control 
                           name='File'
                           placeholder='File'
                           type="file" 
                           onChange={(e) => {
                              setImgComics(e.target.files[0])
                           }}
                        />
                     </Modal.Body>

                     <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                           Close
                        </Button>
                        <Button 
                           type="submit"
                           variant="primary" 
                        >
                           Save Changes
                        </Button>
                     </Modal.Footer>   
                  </form> 
               </Modal>
            </Container>
         </div>
      </>
   );
}

export default Lore;