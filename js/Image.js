import React from 'react';

import imgUrl from '../img/256px-Ada_Lovelace_portrait.jpg';

function AdaImage(props) {

   return(
      <img src={imgUrl} class="image" alt='Portrait of Ada Lovelace' />
   )
}

export default AdaImage;