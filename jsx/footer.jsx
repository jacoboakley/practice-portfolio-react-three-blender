import React from 'react';
import Home from './home.jsx';
import Gallery from './gallery.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: [
        <Home />
      ],
      components: [
        <Home />, <Gallery  />
      ]
    };
  }
    
 select(event) {
    let newItems = this.state.page.slice();
    newItems.splice(0, 1, this.state.components[event.target.dataset.value]);
      this.setState({page: newItems});
      
  }
  
  render() {
    return(
      <div id='slider'>
        
        <ReactCSSTransitionGroup id='slider-container' transitionName="slide" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          {this.state.page}
        </ReactCSSTransitionGroup>
        
        <div id='footer'>
          <div id='code'>
            <a href='https://medium.com/@jacoboakley21' target='_blank'><img src='assets/icons/medium.png' /></a>
            <a href='https://twitter.com/jacoboakley21' target='_blank'><img src='assets/icons/twitter.png' /></a>
            <a href='http://codepen.io/jacoboakley/#' target='_blank'><img src='assets/icons/codepen.png' /></a>
          </div>
          <div id='selector'>
          <a href='#'data-value='0' onClick={this.select.bind(this)} />
          <a href='#'data-value='1' onClick={this.select.bind(this)} />
          </div>
          <div id='social'>
            <a href='assets/other/resume.docx'><img src='assets/icons/document.png' /></a>
            <a href='https://github.com/jacoboakley' target='_blank'><img src='assets/icons/github.png' /></a>
            <a href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img src='assets/icons/linkedin.png' /></a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Footer;