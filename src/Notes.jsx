import React from 'react';
import Delet from '@mui/icons-material/DeleteOutlineRounded'

const Note=(props)=>{

  const delEvent=()=>{
      props.DeletItem(props.id);

  }


    return <>

<div className='NotA'>

<div className='notes'>
        <h1>{props.title}</h1>
        <br/>
        <p>{props.text}</p>
     <button className='deleteIcon' onClick={delEvent}>   <Delet /></button>

    </div>



</div>
    
    </>
}

export default Note;