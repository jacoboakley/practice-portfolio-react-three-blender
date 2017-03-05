import React from 'react';

class Gallery extends React.Component {  
  render() {
    return (
       <div id='gallery'>
         <section className='box'>
           <img src='assets/images/football.jpeg' />
           <p className='text'>Football Game<br /><a href='http://codepen.io/jacoboakley/pen/WRpdXb' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
        
         <section className='box'> 
           <img src='assets/images/cardFlip.jpeg' />
           <p className='text'>Card Flip<br /><a href='http://codepen.io/jacoboakley/pen/ZpRbqB' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
        
         <section className='box'>
           <img src='assets/images/reactClock.jpeg' />
           <p className='text'>React Clock<br /><a href='http://codepen.io/jacoboakley/pen/BQMVoB' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
        
         <section className='box'> 
           <img src='assets/images/reactSlider.jpeg' />
           <p className='text'>React Image Slider<br /><a href='http://codepen.io/jacoboakley/pen/XMJoNY' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
         
         <section className='box'> 
           <img src='assets/images/vetsWhoCode.jpeg' />
           <p className='text'>Vets Who Code symbol<br /><a href='http://codepen.io/jacoboakley/pen/zNBxOm' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
       </div>
    )
  }
}

export default Gallery;