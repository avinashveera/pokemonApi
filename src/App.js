import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Notes';

export default function App() {

  const [passNote,upPassNote]=useState([])

  const NotA=(Note)=>{

    console.log(Note)

    upPassNote((pre)=>{
      return [...pre,Note]
    })
    

  }

 const  Deletitem=(id)=>{

   upPassNote((pre)=>{return pre.filter((currele,indx)=>{
return indx !== id ;
  })

   })


   
 }

  return <>

<div className='main'>
          
  <Header/>


<CreateNote prp={NotA} />


{
  passNote.map((arr,index)=>{
    return <Note 
    key={index}
    id={index}
      title={arr.titile}
      text={arr.text}
     DeletItem={Deletitem}
    />
  })
}




<Footer/>

</div>
  
  </>
}
