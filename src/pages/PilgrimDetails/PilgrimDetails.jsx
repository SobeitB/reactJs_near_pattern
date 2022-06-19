import {useState, useEffect, useCallback} from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';
import imgFrame from '../../assets/img/frame.png';
import imgAdvantages from '../../assets/img/advantages.png';
import imgDisadvantages from '../../assets/img/disadvantages.png';
import imgSkills from '../../assets/img/skills.png';
import imgPets from '../../assets/img/pets.png';
import btnLeft from '../../assets/img/left.png';
import btnParas from '../../assets/img/btn-paras.png';
import btnRight from '../../assets/img/right.png';
import {OWNER_ADDRESS} from '../../env'

import {
  useParams,
  Link
} from "react-router-dom";
import {useNotification} from 'web3uikit';

const PilgrimDetails = () => {
   const [ownedNft, setOwnedNft] = useState([]);
   // const [allNft, setAllNft] = useState([]);
   const [metadata, setMetadata] = useState([]);
   const [isOwned, setIsOwned] = useState(0);
   const [isEdit, setIsEdit] = useState(false);
   const [isEditable, setEditable] = useState(1);
   const [story, setStory] = useState(null)
   const [tempstory, setTempStory] = useState(null)
   const [pilgrimConn, setPilgrimConn] = useState([])
   const [tempConn, setTempConn] = useState([])
   
   const [conndata0, setConnData0] = useState([])
   const [conndata1, setConnData1] = useState([])
   const [conndata2, setConnData2] = useState([])
   const [conndata3, setConnData3] = useState([])

   const [show, setShow] = useState(false);
   const [isSaving, setIsSaving] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   let { token_id } = useParams();
   const dispatchNotification = useNotification();

   async function get_owned_nft () {
      const owned_nft = await window.contract_nft.nft_tokens_for_owner({ account_id: window.accountId });
      setOwnedNft([...owned_nft]);
      if(window.accountId === OWNER_ADDRESS){
         setIsOwned(1)
      }else{
         console.log(owned_nft.filter(x => x.token_id === token_id ).length)
         setIsOwned(owned_nft.filter(x => x.token_id === token_id ).length)
      }
   };

   const get_story = async () =>{
      console.log(await window.contract.get_story({ nft_id: token_id }))
      await window.contract.get_story({ nft_id: token_id })
         .then(stry => {
            if(stry !== "Hello"){
               stry = JSON.parse(stry)
               setStory(stry.story)
               setTempStory(stry.story)
               setPilgrimConn(JSON.parse(stry.nft_connection))
               setTempConn(JSON.parse(stry.nft_connection))
               get_conn_params(JSON.parse(stry.nft_connection))
               if(window.accountId){
                  if(window.accountId !== OWNER_ADDRESS){
                  setEditable(0)
                  }
               }

            }else{
               setStory("Hello")
               setTempStory("Hello")
               setPilgrimConn([null,null,null,null])
               setTempConn([null,null,null,null])
               get_conn_params([null,null,null,null])
            }
         // console.log(isEditable)
         })
   }

   useEffect(() => {
      // get_all_nft();
      if(token_id > 1776 || token_id<0) return;
      get_story();
      get_params(token_id);

      if (!window.accountId) return;
      get_owned_nft();
   }, [token_id]);

   const delay = ms => new Promise(res => setTimeout(res, ms));

   const handleNewNotification = (type, icon, text, title) => {
      dispatchNotification({
         type,
         message: text,
         title: title,
         icon,
         position: 'topR',
      });
   };

   useEffect(() => {
      async function saving() {
         // kclick({"show":true,"msg":"Saving the Story","head":"Saving"})
         handleNewNotification("info", "info", "Saving the Story", "Saving")
      
         await delay(3000);
         await window.contract.set_story({
            story: tempstory,
            nft_id: token_id,
            nft_connection: JSON.stringify(tempConn)
         })

         get_story();

         // kclick({"show":false,"msg":"Saving the Story","head":"Saving"})
         // kclick({"show":true,"msg":"Success","head":"Success"})
         handleNewNotification("success", "info", "Saving the Story", "Success")
         await delay(3000);
         // kclick({"show":false,"msg":"Success","head":"Success"})

         // await alert("success")
         setIsEdit(false)
      }

      if(isSaving) {
         saving()
      }
   }, [isSaving])

   const save_story = async () => {
      handleShow()
   }

   const get_params = async (tokenId) => {
      await fetch(`https://cloudflare-ipfs.com/ipfs/bafybeicx2okilwtljyac2b5prutqodxkouyvfgysuav6pspoznn2n2qs2i/${tokenId}.json`)
      .then(response => response.json())
      .then(setMetadata)
      .catch(console.error)
   }

   const get_conn_params = useCallback(async(arr) => {

      if(arr[0]>0) {
         fetch(`https://cloudflare-ipfs.com/ipfs/bafybeicx2okilwtljyac2b5prutqodxkouyvfgysuav6pspoznn2n2qs2i/${arr[0]}.json`)
         .then(response => response.json())
         .then((jsonData) => {
         setConnData0(jsonData)
         })
         .catch((error) => {
         console.error(error)
         })
      }
      if(arr[1]>0){
         fetch(`https://cloudflare-ipfs.com/ipfs/bafybeicx2okilwtljyac2b5prutqodxkouyvfgysuav6pspoznn2n2qs2i/${arr[1]}.json`)
         .then(response => response.json())
         .then((jsonData) => {
         setConnData1(jsonData)
         })
         .catch((error) => {
         console.error(error)
         })
      }
      if(arr[2]>0){
         fetch(`https://cloudflare-ipfs.com/ipfs/bafybeicx2okilwtljyac2b5prutqodxkouyvfgysuav6pspoznn2n2qs2i/${arr[2]}.json`)
         .then(response => response.json())
         .then((jsonData) => {
         setConnData2(jsonData)
         })
         .catch((error) => {
         console.error(error)
         })
      }
      if(arr[3]>0){
         fetch(`https://cloudflare-ipfs.com/ipfs/bafybeicx2okilwtljyac2b5prutqodxkouyvfgysuav6pspoznn2n2qs2i/${arr[3]}.json`)
         .then(response => response.json())
         .then((jsonData) => {
         setConnData3(jsonData)
         })
         .catch((error) => {
         console.error(error)
         })
      }
   }, [setConnData3]) 

   // const get_all_nft = async () => {
   //    const all_nft = await window.contract_nft.nft_tokens();
   //    setAllNft([...all_nft]);
   // };

   if(isNaN(token_id)){
      return "ERR";
   }

   let lorebox;
   if(isOwned && isEdit){
      lorebox = (
         <>
         <Form.Control as="textarea" rows={17} onChange={x => setTempStory(x.target.value)} defaultValue={tempstory} />
         <br />
         </>
         )
   }else{
      let h = "495px";
      if(isEditable){
         h = "455px";
      }
      lorebox = (
         <p style={{overflowY: "auto", height: h, color: "#543927", whiteSpace: "pre-wrap"}}>
         {story}
         </p>
         )
   }
   const updateConn = async (val,index) => {
      let newArr = [...tempConn];
      newArr[index] = (val === '' ? null : Number(val)) ;

      await setTempConn(newArr)
   }

   function hidechar(val){
      if(typeof val !== "undefined"){
         const val1 = val.slice(0,20);

         return (`${val1} ...`);
      }
   }

   return (
      <div className="pilgrim py-5">
         <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
               <Modal.Title>Save the Story</Modal.Title>
            </Modal.Header>
            <Modal.Body>You can only save the story 1 time, are you sure?</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  No
               </Button>
               <Button variant="primary" onClick={() => {
                  setIsSaving(true)
                  handleClose()
               }}>
                  Yes
               </Button>
            </Modal.Footer>
         </Modal>

         <Container className="pilgrim_detail p-2 p-sm-5">  
         <Row>
            <Col md={6} xs={12} className="py-3 px-4">
               <Row className="justify-content-md-center">
               <Col md={12} sm={12} className="text-center py-2">
                  <img src={HeaderTop} className="img-fluid" alt="" />
                     <i style={{fontSize: "25px"}}>{metadata.title}</i>
                  <img src={HeaderBot} className="img-fluid" alt="" />
               </Col>
               <Col md={7} sm={12} className=" py-2">
                  <div className="with_frame"
                  style={{background: `url(https://cloudflare-ipfs.com/ipfs/bafybeicx2okilwtljyac2b5prutqodxkouyvfgysuav6pspoznn2n2qs2i/${token_id}.png)`}}
                  >
                     <img
                     src={imgFrame}
                     width="100%"
                     style={{ cursor: "pointer" }}
                     className="img-fluid"
                     alt=""
                     />
                  </div>
               </Col>
               </Row>
               <Row className="pt-4">
               <Col xs={12} sm={6} className="py-2">
                  <div className="with_frame2 py-3 px-4">
                     <Row>
                     <Col xs={3}>
                        <img src={imgAdvantages} className="img-fluid" alt=""/>
                     </Col>
                     <Col xs={9}>
                        <b style={{color: "#543927"}}>Advantages</b><br/><small>{(metadata?.advantages?.map((e,i)=>{ return(`${e.name}, `)}) || "-")}</small>
                     </Col>
                     </Row>
                  </div>
               </Col>
               <Col xs={12} sm={6} className="py-2">
                  <div className="with_frame2 py-3 px-4">
                     <Row>
                     <Col xs={3}>
                        <img src={imgDisadvantages} className="img-fluid" alt=""/>
                     </Col>
                     <Col xs={9}>
                        <b style={{color: "#543927"}}>Disadvantages</b><br/><small>{(metadata?.disadvantages?.map((e,i)=>{ return(`${e.name}, `)}) || "-")}</small>
                     </Col>
                     </Row>
                  </div>
               </Col>
               <Col xs={12} sm={6} className="py-2">
                  <div className="with_frame2 py-3 px-4">
                     <Row>
                     <Col xs={3}>
                        <img src={imgSkills} className="img-fluid" alt=""/>
                     </Col>
                     <Col xs={9}>
                        <b style={{color: "#543927"}}>Skills</b><br/><small>{(metadata?.skills?.map((e,i)=>{ return(`${e.name}, `)}) || "-")}</small>
                     </Col>
                     </Row>
                  </div>
               </Col>
               <Col xs={12} sm={6} className="py-2">
                  <div className="with_frame2 py-3 px-4">
                     <Row>
                     <Col xs={3}>
                        <img src={imgPets} className="img-fluid" alt=""/>
                     </Col>
                     <Col xs={9}>
                        <b style={{color: "#543927"}}>Pet</b><br/><small>{(metadata?.attributes?.filter(x => x.trait_type === "Pets" )?.map((e,i)=>{ return(`${e.value}, `)}) || "-")}</small>
                     </Col>
                     </Row>
                  </div>
               </Col>
               </Row>
            </Col>
            <Col md={6} xs={12} className="py-3 px-4">
               <Row>
               <Col xs={12}>
                  <b>Story :</b> <br / >
                     {lorebox}

               </Col>
               </Row>
               <Row className="text-center py-2 justify-content-md-center">
               <Col xs={6} className={`${pilgrimConn?.[0]>0 ? 'btn-conn' : ''}`}>
                  {isOwned && isEdit? 
                     <Form.Control type="number" placeholder="Enter ID" defaultValue={pilgrimConn?.[0]} onChange={e => updateConn(e.target.value,0) } />
                  :
                     <Link to={`/pilgrim/${pilgrimConn?.[0]}`}>
                     {hidechar(conndata0?.title)}          
                     </Link>
                  }
               </Col>
               <Col xs={6} className={`${pilgrimConn?.[1]>0 ? 'btn-conn' : ''}`}>
                  {isOwned && isEdit? 
                     <Form.Control type="number" placeholder="Enter ID" defaultValue={pilgrimConn?.[1]} onChange={e => updateConn(e.target.value,1) } />
                  :
                     <Link to={`/pilgrim/${pilgrimConn?.[1]}`}>
                     {hidechar(conndata1?.title)}
                     </Link>
                  }  
               </Col>
               <Col xs={6} className={`${pilgrimConn?.[2]>0 ? 'btn-conn' : ''}`}>
                  {isOwned && isEdit? 
                     <Form.Control type="number" placeholder="Enter ID" defaultValue={pilgrimConn?.[2]} onChange={e => updateConn(e.target.value,2) } />
                  :
                     <Link to={`/pilgrim/${pilgrimConn?.[2]}`}>
                     {hidechar(conndata2?.title)}          
                     </Link>
                  }     
               </Col>

               <Col xs={6} className={`${pilgrimConn?.[3]>0 ? 'btn-conn' : ''}`}>
                  
                  {isOwned && isEdit? 
                     <Form.Control type="number" placeholder="Enter ID" defaultValue={pilgrimConn?.[3]} onChange={e => updateConn(e.target.value,3) } />
                  :
                     <Link to={`/pilgrim/${pilgrimConn?.[3]}`}>
                     {hidechar(conndata3?.title)}          
                     </Link>
                  }      
               </Col>
               </Row>
               <Row>
               <Col xs={12} className="px-5">
               {isOwned && isEdit ? 
                  <Button onClick={save_story}>Save Story</Button>
                  : 
                  isOwned && isEditable ? <Button onClick={e=>setIsEdit(true)}>Edit</Button> : ""
               }
               </Col>
               </Row>
            </Col>
         </Row>
         <Row>
            <Col xs={2} md={2} className="py-2 pb-5">
               {token_id > 0 &&
                  <Link to={`/pilgrim/${(Number(token_id)-1)}`}><img src={btnLeft} height="40px" alt=""/></Link>
               }
            </Col>
            <Col xs={8} md={8} className="py-2 text-center text-sm-start">
               <a 
                  href={`https://paras.id/token/623c2cd4294f600e58f46fa2.astrogenfunds.near::${token_id}/${token_id}`} 
                  target="_blank"
                  rel="noreferrer"
               >
                     <img src={btnParas} height="40px" alt="" /> 
               </a>
            </Col>
            <Col xs={2} md={2} className="py-2 text-center text-sm-end">
               {token_id < 1776 &&
                  <Link to={`/pilgrim/${(Number(token_id)+1)}`}><img src={btnRight} height="40px" alt=""/></Link>
               }
            </Col>
         </Row>
         </Container>
      </div>
   )
}

export default PilgrimDetails;
