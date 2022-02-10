import React from 'react';

export default function Footer() {

    const Year=new Date().getFullYear();

  return <>
  
<div className='footer'>
<p>copyright © {Year}</p>
  
</div>
  </>
}
