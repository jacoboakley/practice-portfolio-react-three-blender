import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Jacob Oakley</h1>
        <h3>Frontend Web Developer /<br/>
            Aspiring Professional Netflix Binge Watcher
        </h3>
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
  constructor(props) {
    super(props);
    
    this.state = {
      images: [
        '//codepen.io/jacoboakley/embed/WRpdXb/?height=725&theme-id=dark&default-tab=result&embed-version=2&editable=true'
      ],
      items: [
        '//codepen.io/jacoboakley/embed/WRpdXb/?height=725&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/YpdGJd/?height=725&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/ZpRbqB/?height=725&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/BQMVoB/?height=725&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/XMJoNY/?height=725&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/zNBxOm/?height=725&theme-id=dark&default-tab=result&embed-version=2&editable=true'
      ]
    };
  }
  

  
 select(event) {
    let newItems = this.state.images.slice();
    newItems.splice(0, 1, this.state.items[event.target.dataset.value]);
      this.setState({images: newItems});
  }
  
  render() {
    return(
      <div id='slider'>
        
        <ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          <iframe key={this.state.images} scrolling='no' src={this.state.images} frameBorder='no' allowTransparency='true' allowFullScreen='true' />
        </ReactCSSTransitionGroup>
        
        <div id='selector'>
          <a href='#'><img data-value='0' onClick={this.select.bind(this)} src='assets/images/football.PNG' /></a>
          <a href='#'><img data-value='1' onClick={this.select.bind(this)} src='assets/images/reactProfileCard.PNG' /></a>
          <a href='#'><img data-value='2' onClick={this.select.bind(this)} src='assets/images/cardFlip.PNG' /></a>
          <a href='#'><img data-value='3' onClick={this.select.bind(this)} src='assets/images/reactClock.PNG' /></a>
          <a href='#'><img data-value='4' onClick={this.select.bind(this)} src='assets/images/reactSlider.PNG' /></a>
          <a href='#'><img data-value='5' onClick={this.select.bind(this)} src='assets/images/vetsWhoCode.PNG' /></a>
        </div>
        
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