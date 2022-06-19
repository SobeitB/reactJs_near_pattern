import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';

import ReactPaginate from 'react-paginate';
import { NoNft } from '../../components/NoNft/NoNft';
import s from './pilgrim.module.css'

function Pilgrim() {
  const [allSupply, setAllSupply] = useState(0);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sorting, setSorting] = useState("asc");
  const [search, setSearch] = useState("");

  const itemsPerPage = 18;

  useEffect(() => {
    // get_all_nft();
    // Error Gas Limit

    get_total_supply();

    if (!window.accountId) return;
    get_owned_nft();
  }, [window.accountId,itemOffset, itemsPerPage]);

  const get_owned_nft = async () => {
    // const owned_nft = await window.contract_nft.nft_tokens_for_owner({ account_id: window.accountId });
    // setOwnedNft([...owned_nft]);
  };

  // const get_all_nft = async () => {
    // const all_nft = await window.contract_nft.nft_tokens();
    // setAllNft([...all_nft]);
    // Error Gas Limit
  // };

  const get_total_supply = async () => {
    const all_supply = await window.contract_nft.nft_total_supply();
    setAllSupply(all_supply);
  };

  useEffect(() => {
    let arr = ([...Array(Number(allSupply)).keys()])
    let startOffset = itemOffset;
    let endOffset = itemOffset + itemsPerPage;

    arr = arr.slice(startOffset, endOffset)

    if(sorting === "desc"){
      arr = arr.reverse()
    }

    setPageCount(Math.ceil(Number(allSupply) / itemsPerPage));
    if(search){
      let oldArr = [...Array(Number(allSupply)).keys()]
      arr = oldArr.filter(x => x === Number(search))
      setPageCount(1)
    }

    setCurrentItems(arr);
  }, [allSupply, itemOffset, sorting, search])

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % allSupply;
    setItemOffset(newOffset);
  };

  return (
    <div className="pilgrim py-5">
      <Container className="text-center">
        <img src={HeaderTop} alt="" className="img-fluid" />
          <h1>All Pilgrims</h1>
        <img src={HeaderBot} alt="" className="img-fluid" />
        {currentItems && 
          <Row className="pt-5 justify-content-end">
            <Col md={4} xs={12} className="py-2">
              <Form.Control type="number" value={search} placeholder="Search ID" onChange={(e) => setSearch(e.target.value)} />
            </Col>

            <Col md={2} xs={12} className="py-2">
              <Form.Select aria-label="Sort" onChange={(e) => setSorting(e.target.value)}>
                <option value="asc">ID (asc)</option>
                <option value="desc">ID (desc)</option>
              </Form.Select>
            </Col>
          </Row>
        }
        <Row className={!currentItems && s.row} >
          {currentItems ? currentItems.map((e,) => {
            return(
              <Col key={e} md={2} xs={6} className="py-2">
                <a href={`/pilgrim/${e}`}>
                  <img
                    src={`/imgs/${e}.png`}
                    width="100%"
                    style={{ cursor: "pointer" }}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </Col>
            )
          })
          :
            <NoNft text="You can get your own Pilgrim on Paras to read comics!" />
          }
        </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
      </Container>
    </div>
  );
}

export default Pilgrim;
