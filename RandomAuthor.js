import React  ,{useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Link } from  'react-router-dom'; 
import SVG from './refes.svg'


function RandomAuthor() {
   let {authorName} =  useParams();
   let [quoteList , setQuotelist] = useState([]);

   const author_url = "https://quote-garden.herokuapp.com/api/v2/authors/"
   const author_params = "?page=1&limit=10";
   console.log(author_url)

   async function getAuthor() {
      const res = await fetch(author_url + authorName + author_params);
      const authorData = await res.json();
      console.log(authorData)
      setQuotelist(authorData.quotes)
    }

   useEffect(() => {
      getAuthor()
   } , [])
   const ButtonClick = (e) => {
      getAuthor();
    }
 
   return    (
     <> 
      <h1>{authorName}</h1>
      <Link to= '/' >
         <button onClick={ButtonClick} className="randoms">Random <img src={SVG}></img></button>
      </Link>
     {quoteList.map(quotes => {
              return <> 
                   <div className="listQuotes_content">
                       <p className="listQoutes" quotes={quotes}>{quotes.quoteText}</p>
                   </div>
                     </>
                  }
               )
            }
  
</>
   )

}

export default RandomAuthor;