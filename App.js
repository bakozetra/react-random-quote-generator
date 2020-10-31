import React from 'react'
 import RandomQuote from './randomQuotes'
 import RandomAuthor from './RandomAuthor'
 import { BrowserRouter  as Router , Switch , Route } from 'react-router-dom'
function App () {
  return (
   <>
     <Router>
       <Switch>
         <Route path="/quote/:authorName">
           <RandomAuthor/>
         </Route>
         <Route path='/'>
          <RandomQuote/>
         </Route>
       </Switch>
     </Router>
   </>
  )
}
export default App  

  