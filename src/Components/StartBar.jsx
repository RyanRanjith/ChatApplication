import React from 'react'
import Captain from '../Images/Captain.png'
import Location from '../Images/location.png'
import Email from '../Images/email.png'
import Education1 from '../Images/Education1.png'
import Education2 from '../Images/Education2.png'
import Degree from '../Images/degree.png'


function StartBar() {
  return (
    <div className='startbar'>
     <text> My Profile</text>

     <div className='middlepage'>

      <text> Name: Ranjith Gopinath </text>

      <div className='goal'>
        <text> I finished my higher secondary school in 2016 and my 
        undergraduate studies in 2020. 
        I have experience working in customer service, and 
        I'm now pursuing a master's degree in computer science at a 
        California state institution.
 </text>

 <text className='address'> 2021 N Beverly Plaza, Long Beach, California, United States - 90815</text>
   
   <text className='email'> ranjithsreekarag@gmail.com</text>


   <div className='right'>
     
     <text className='anna'>
     Anna university (2016-2020) <p className='locationa'>
     Chennai,India
      
     </p><p className='ece'>
      Electronics and Communication
     </p>

     </text>

     <text className='csudh'>
      California state University<p className='location'>
        Dominguez hills
      </p><p className='cse'>
        Computer Science
      </p>
     </text>

   </div>

   
      </div>


     </div>

      <img src={Captain} className='image2'/>
      <img src={Location} className='image3'/>
      <img src={Email} className='image4'/>
      <img src={Education1} className='image5'/>
      <img src={Education2} className='image6'/>
      <img src={Degree} className='image7'/>
      <img src={Degree} className='image8'/>
      
    </div>

  )   
}



export default StartBar

