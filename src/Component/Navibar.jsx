import React, { useEffect, useState } from 'react'
import './Navibar.css'
function Navibar() {
  const [show,setshow] = useState(false)
  /*sideeffct*/
  useEffect(()=>{
    window.addEventListener("scroll",()=>{/*first arg should be the event and sec arg should be funtion to execute*/
      if(window.scrollY>600){
         setshow(true)
      }else{
        setshow(false)
      }
    })/* dependency is null not used.reason is content stop cheyan padilla*/
  })
  return (
    <div className={`${show && 'nav-black'} nav`}>
      <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  )
}

export default Navibar
