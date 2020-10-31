import React ,{useEffect, useState } from "react";
import { Link } from  'react-router-dom'; 
import SVG from './refes.svg'

const RandomQuote = () => {
    let [quote, setQuote] = useState('');
    const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
  
  async  function getQuote () { 
      const res = await fetch(url);
      const data = await res.json();
      setQuote(data.quote);
    } 
    // author = `{quote.quoteAuthor}`;
   
    useEffect(() => {
        getQuote();
    }, []);
    
    const onButtonClick = (e) => {
      getQuote();
    }
    return <>  
              <button onClick={onButtonClick} className= "random">Random<img src={SVG}></img></button>
              <h2>{quote.quoteText}</h2>
              <Link to={`/quote/${quote.quoteAuthor}`} className="random_link">
                  <button className='NameAuthor'quote={quote} >
                    <p>{quote.quoteAuthor}</p>
                    <span>{quote.quoteGenre}</span>
                  </button>
              </Link> 
           </>
     }; 
export default RandomQuote;