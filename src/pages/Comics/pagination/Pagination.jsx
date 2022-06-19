import '../Comics.css'
import {useCallback} from 'react'

const Pagination = ({ pages, setPages, allPages }) => {
   
   const updatePages = useCallback((nameEvent) => () => {
      if(nameEvent === 'next') {
         pages + 1 < Math.ceil(allPages / 10) && setPages(pages + 1)
      } else {
         pages > 0 && setPages(pages - 1)  
      }
   }, [pages, allPages]) 

   return (
      <div className="pagination">
         <div 
            onClick={updatePages('prev')}
            className="page_link"
         >{'<'} previous</div>
         <div 
            rel="canonical" 
            role="button" 
            className="page_item"
         >
            {pages + 1}/{Math.ceil(allPages / 10)}
         </div>
         <div 
            onClick={updatePages('next')}
            className="page_link"
         >next {'>'}</div>
      </div>
   )
}

export default Pagination