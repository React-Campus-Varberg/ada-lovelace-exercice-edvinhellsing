import React from 'react';
import ReactDOM from 'react-dom';

import About from './About';
import Name from './App';
import AdaImage from './Image';
import imgUrl from '../img/256px-Ada_Lovelace_portrait.jpg';

function App() {

   return (
      <article>
         <Name item={ Name } done="true" />

         <AdaImage item={ AdaImage }/>

         <About item={ About } done="true" />

      </article>
   )
}

ReactDOM.render(<App />, document.getElementById('root'));