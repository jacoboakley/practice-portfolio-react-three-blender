import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
          <h1>About Me</h1>
          <p>
            I was born to do one thing but, I haven't been able to find a way to get paid sitting on the couch and binge watching Netflix. So, I decided to start studying Frontend Web Development. If you ask my family, they will tell you how technically savvy I am. I don't think I would be bragging to much if I said I am the go to guy when they need someone to hook up their printers. If the word of my family isn't enough keep reading and I might surprise you.
          </p>
      </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <figure id='html'>a</figure>
        <figure id='javascript'>b</figure>
        <figure id='css'>c</figure>
      </div>
    )
  }
}

class Gallery extends React.Component {
  render() {
    return (
      <div className='gallery'>
        <iframe scrolling='no' title='Multiplayer football game' src='//codepen.io/jacoboakley/embed/WRpdXb/?height=265&theme-id=light&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/WRpdXb/'>Multiplayer football game</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
        </iframe>
        <iframe scrolling='no' title='Profile Card - React' src='//codepen.io/jacoboakley/embed/YpdGJd/?height=265&theme-id=light&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/YpdGJd/'>Profile Card - React</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
        </iframe>
        <iframe scrolling='no' title='React - Clock' src='//codepen.io/jacoboakley/embed/BQMVoB/?height=265&theme-id=light&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/BQMVoB/'>React - Clock</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
        </iframe>
        <iframe scrolling='no' title='Card Flip' src='//codepen.io/jacoboakley/embed/ZpRbqB/?height=265&theme-id=light&default-tab=result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullScreen='true'>See the Pen <a href='http://codepen.io/jacoboakley/pen/ZpRbqB/'>Card Flip</a> by Jacob Oakley (<a href='http://codepen.io/jacoboakley'>@jacoboakley</a>) on <a href='http://codepen.io'>CodePen</a>.
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