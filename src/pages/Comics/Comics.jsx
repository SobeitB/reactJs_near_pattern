import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';
import './Comics.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import out from '../../assets/img/out.svg'
import {logout} from '../../utils/near/utilsNear'
import { NoNft } from '../../components/NoNft/NoNft';
import {useMoralis} from 'react-moralis'
import Pagination from './pagination/Pagination';

const Comics = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [isOwnerShip, setIsOwnerShip] = useState(false);
  const [error, setError] = useState(false);
  const {Moralis} = useMoralis();
  const [pages, setPages] = useState(0)
  const [allPages, setAllPages] = useState(0);

   useEffect(() => {
      async function getComics() {
         const isOwner = await window.contract_nft.nft_tokens_for_owner({"account_id":window.accountId,"from_index":"0","limit":1});
         setIsOwnerShip(isOwner.length > 0);
         
         if(isOwner.length) {
            const Comics = Moralis.Object.extend("comics");
            const query = new Moralis.Query(Comics);
            const comicsAll = await query

            .find();

            const obj = await query
            .limit(10)
            .skip(10 * pages)
            .find()
            setAllPages(comicsAll.length)
            
            setCurrentItems(obj)
            console.log(!obj.length)
            !obj.length && setError('There are currently no comics. But soon they will!') 
         }
      }

      getComics()
   }, [pages, Moralis.Object, Moralis.Query])

   return(
      <div className="bodyPages py-5">
         <Container className="text-center">
            <img src={HeaderTop} alt="" className="img-fluid" />
               
               {isOwnerShip ?
                  <h1 className="title">Comics</h1>
                  :
                  <>
                     <p className="titlePages">
                        {window.accountId ? window.accountId : 'not accounts'}
                        {window.accountId && 
                           <img 
                              onClick={logout}
                              className="out"
                              src={out}
                              alt=""
                           />
                        }
                        
                     </p>
                     <h1 className="titleNft">You do not have NFT Pilgrims.</h1>
                  </>
               }
            <img src={HeaderBot} alt="" className="img-fluid" />

            <Row className={isOwnerShip && currentItems.length > 0 ? "comicsCont" : "NotcomicsCont"}>
               {isOwnerShip && currentItems.length > 0 &&
                  currentItems.map((e) => {
                     return(
                        <Col key={e.id} md={2} xs={6} className="py-2">
                           
                           <img
                              src={e.attributes.File}
                              className="comics"
                              alt=""
                           />
                           <Link to={`/comics/${e.attributes.count}/1`}>
                              <button className="readComics">open</button>
                           </Link>
                        </Col>
                     )
                  })
               }

               {!isOwnerShip &&
                  <NoNft 
                     text="You can get your own Pilgrim on Paras to read comics!" 
                  />
               }

               {error && 
                  <NoNft 
                     text={error}
                  />
               }

               {isOwnerShip && currentItems.length > 0 &&
                  <Pagination 
                     pages={pages}
                     allPages={allPages}
                     setPages={setPages}
                  />
               }
            </Row>
        </Container>
      </div>
   )
} 

export default Comics;