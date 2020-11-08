import React from 'react';
import ReactDOM from 'react-dom';

import About from './About';
import Name from './App';
import AdaImage from './Image';

function App() {

   return (
      <article>
         <Name item={ Name } done="true" />

         <AdaImage item={ AdaImage }/>

         <About item={ About } />
      </article>
   )
}

ReactDOM.render(<App />, document.getElementById('root'));