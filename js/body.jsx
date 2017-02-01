import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <p>Hello from our app</p>
      </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <p>Hello from our app</p>
      </div>
    )
  }
}

class Gallery extends React.Component {
  render() {
    return (
      <div className='gallery'>
        <iframe height='265' scrolling='no' title='Multiplayer football game' src='//codepen.io/jacoboakley/embed/WRpdXb/?height=265&theme-id=light&default-tab=js,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/WRpdXb/'>Multiplayer football game</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className='body'>
        <About />
        <Skills />
        <Gallery />
      </div>
    )
  }
}

export default Body;