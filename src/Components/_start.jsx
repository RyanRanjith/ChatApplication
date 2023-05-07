import React from 'react'
import Study from '../Images/Study.png'
import StartBar from './StartBar'
import EndBar from './EndBar'


const _start = () => {
  return (
    <div className='start'>
   <StartBar/>
   <EndBar/>

    <img src={Study} className='image1'/>
     <text className='education'>Education</text>
    


    
   

    </div>
  )
}



export default _start

