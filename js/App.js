import React from 'react';

function Name(props) {
   console.log(props);
   let done = '';

   if (props.done === 'true') {
      done = 'Ada Lovelace';
   } else {
      done = 'No name';
   }

   return(
      <h1>{props.item} {done}</h1>
   )
}

export default Name;