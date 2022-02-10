import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Com=()=>{
    const [num,setNum]=useState(1);

    useEffect(()=>{
        
        async function getData(){

            const rest=axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log((await rest))
        
           
        }



        getData();

    })


    return (<>

    <h1>you selected {num}</h1>

    <select onClick={(e)=>{
    setNum(e.target.value)
    }}><option ></option>
        <option value='1'>1</option>
        <option value='25'>25</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
    </select>
    

    
    
    </>)
}

export default Com;