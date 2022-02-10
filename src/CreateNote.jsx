import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Addicon from '@mui/icons-material/Add'

export default function CreateNote(props) {

    const [Note,setNotes]=useState({
        titile:'',
        text:''
    })

    const ChangeHandler=(event)=>{
        // const name =event.target.name;
        // const value=event.target.value;

       const {name,value}=event.target
      
        setNotes((pre)=>{

          return { ...pre ,
            [name]:value 

          }

        })
    };



    const btnClick=()=>{
      return props.prp(Note)
    }



  return <>

  <div className='main_note'>

   <form>
   <input type="text" name="titile" id="" placeholder='TITLE' value={Note.titile} onChange={ChangeHandler} />
    <textarea name="text" placeholder='write a text' value={Note.text} onChange={ChangeHandler} />
    <Button onClick={btnClick} variant="contained" href="#contained-buttons" style={{position:"absolute",bottom:"-10px", right:"10px"}}>
      <Addicon/>
      </Button>
      
   </form>
  </div>
  

</>
}
