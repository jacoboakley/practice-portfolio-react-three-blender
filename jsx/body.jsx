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
        '//codepen.io/jacoboakley/embed/WRpdXb/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true'
      ],
      items: [
        '//codepen.io/jacoboakley/embed/WRpdXb/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/YpdGJd/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/ZpRbqB/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true',
        '//codepen.io/jacoboakley/embed/BQMVoB/?height=600&theme-id=dark&default-tab=result&embed-version=2&editable=true'
      ],
      count: 0,
      direction: ''
    };
  }
  
  scrollRight() {
    let newItems = this.state.images.slice();
    newItems.splice(0, 1, this.state.items[this.state.count]);
    this.state.count == this.state.items.length - 1 ? 
      this.setState({images: newItems, count: 0, direction: 'right' }) : 
        this.setState({images: newItems, count: this.state.count + 1, direction: 'right'});
  };
  
  scrollLeft() {
    let newItems = this.state.images.slice();
    newItems.splice(0, 1, this.state.items[this.state.count]);
    this.state.count == 0 ? 
      this.setState({images: newItems, count: this.state.items.length - 1, direction: 'left' }) : 
        this.setState({images: newItems, count: this.state.count -1, direction: 'left'});
  };
  
  render() {
    return(
      <div id='slider'>
        <aside onClick={this.scrollLeft.bind(this)} id='leftArrow' />
        <ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          <iframe key={this.state.images} id={this.state.direction} scrolling='no' src={this.state.images} frameBorder='no' allowTransparency='true' allowFullScreen='true' />
        </ReactCSSTransitionGroup>
        <aside onClick={this.scrollRight.bind(this)} id='rightArrow'/>
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