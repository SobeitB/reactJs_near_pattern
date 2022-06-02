import s from './pagination.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Link, useParams} from 'react-router-dom';
import { useState } from 'react';

export const PaginationComp = () => {
   const [pagesBtn, setPagesBtn] = useState([1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17,18, 19]);
   const {token_id, pages} = useParams();
   
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
                     <SwiperSlide key={page}>
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