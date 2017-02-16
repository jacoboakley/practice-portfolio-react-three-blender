import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Jacob Oakley</h1>
        <h3>Frontend Web Developer /<br/>
            Aspiring Professional Netflix Binge Watcher
        </h3>
          <h5>
            I was born to do one thing but, I haven't been able to find a way to get paid sitting on the couch and binge watching Netflix. So, I decided to start studying Frontend Web Development. If you ask my family, they will tell you how technically savvy I am. I don't think I would be bragging to much if I said I am the go to guy when they need someone to hook up their printers. If the word of my family isn't enough keep reading and I might surprise you.
          </h5>
      </div>
    )
  }
}



class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <div >
          <h1 id='html'>HTML</h1>
          <ul>
            <li>Bootstrap</li>
            <li>Foundation</li>
          </ul>
        </div>
        <div>
          <h1 id='javascript'>JavaScript</h1>
          <ul>
           <li>React</li>
           <li>Node</li>
           <li>Three.js</li>
          </ul>
        </div>
        <div>
          <h1 id='css'>CSS</h1>
          <ul>
            <li>SASS</li>
            <li>Flex</li>
          </ul>
        </div>
      </div>
    )
  }
}

class Gallery extends React.Component {
  render() {
    return (
      <div className='gallery'>
      <aside className='left'>&laquo;</aside>
      <div className='swipe'>
          <iframe scrolling='no' title='Multiplayer football game' src='//codepen.io/jacoboakley/embed/WRpdXb/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/WRpdXb/'>Multiplayer football game</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
          </iframe>
          
          <iframe scrolling='no' title='Profile Card - React' src='//codepen.io/jacoboakley/embed/YpdGJd/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/YpdGJd/'>Profile Card - React</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
          </iframe>

          <iframe scrolling='no' title='Card Flip' src='//codepen.io/jacoboakley/embed/ZpRbqB/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/ZpRbqB/'>Card Flip</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
          </iframe>
          
          <iframe scrolling='no' title='React - Clock' src='//codepen.io/jacoboakley/embed/BQMVoB/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/BQMVoB/'>React - Clock</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
          </iframe>
      </div>
      <aside className='right'>&raquo;</aside>
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className='body'>
        <Home />
        <Skills />
        <Gallery />
      </div>
    )
  }
}

export default Body;