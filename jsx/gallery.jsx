import React from 'react';

class Gallery extends React.Component {  
  render() {
    return (
       <div id='gallery'>
         <section className='box'>
           <img src='assets/images/football.png' />
           <p className='text'>Two player football game created with JavaScript. <br /><a href='http://codepen.io/jacoboakley/pen/WRpdXb' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
        
         <section className='box'> 
           <img src='assets/images/cardFlip.png' />
           <p className='text'>Card flip using front and backface. <br /><a href='http://codepen.io/jacoboakley/pen/ZpRbqB' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
        
         <section className='box'>
           <img src='assets/images/reactClock.png' />
           <p className='text'>Clock using React<br /><a href='http://codepen.io/jacoboakley/pen/BQMVoB' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
        
         <section className='box'> 
           <img src='assets/images/reactSlider.png' />
           <p className='text'>Image slider using React. <br /><a href='http://codepen.io/jacoboakley/pen/XMJoNY' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
         
         <section className='box'> 
           <img src='assets/images/vetsWhoCode.png' />
           <p className='text'>Vets Who Code symbol created using blender and imported using Three.js. <br /><a href='http://codepen.io/jacoboakley/pen/zNBxOm' target="_blank">View Code</a></p>
           <div className='shadow'></div>
         </section>
       </div>
    )
  }
}

export default Gallery;