import s from './pagination.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useMoralis} from "react-moralis";

export const PaginationComp = () => {
   const [pagesBtn, setPagesBtn] = useState([]);
   const {token_id, pages} = useParams();
   const {Moralis} = useMoralis()

   useEffect(() => {
      const getPages = async () => {
         const Comics = Moralis.Object.extend("comics");
         const query = new Moralis.Query(Comics);
         const pages = await query
         .equalTo("count", token_id)
         .first();

         for(let i = 0; i < pages.attributes.pages.length; i++) {
            setPagesBtn((prevVal) => {
               return [
                  ...prevVal,
                  i + 1
               ]
            });
         }
      }

      getPages()
   }, [])
   
   return(
      <div className={s.pagination_body}>

            <Swiper
               spaceBetween={20}
               slidesPerView={10}
               navigation={true} 
               modules={[Navigation, Pagination]}
            >
               {pagesBtn.map((page) => {
                  return(
                     <SwiperSlide 
                        className={s.swiper_slide}
                        key={page}
                     >
                        <Link 
                           to={`/comics/${token_id}/${page}`}
                           className={`${s.pagination_pages} ${pages === String(page) && s.pages_active}`}
                           key={page} 
                        >{page}</Link>
                     </SwiperSlide>
                  )
               })}
            </Swiper>
      </div>
   )
}