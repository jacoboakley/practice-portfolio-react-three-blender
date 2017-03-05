import React from 'react';
import Home from './home.jsx';
import Skills from './skills.jsx';
import Gallery from './gallery.jsx';
import Connect from './connect.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: [
        <Home />
      ],
      components: [
        <Home />, <Skills />, <Gallery  />, <Connect />
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
        
        <div id='selector'>
          <a href='#'data-value='0' onClick={this.select.bind(this)} />
          <a href='#'data-value='1' onClick={this.select.bind(this)} />
          <a href='#'data-value='2' onClick={this.select.bind(this)} />
          <a href='#'data-value='3' onClick={this.select.bind(this)} />
        </div>
        
      </div>
    )
  }
}

export default Footer;