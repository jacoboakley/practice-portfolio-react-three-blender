import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
  }
  
  slide(event) {
    const checkName = event.target.name;
    const body = document.querySelector('.body');

    checkName == 'home' ? body.style.top = '0' : 
      checkName == 'about' ? body.style.top = '-100%' : 
        checkName == 'skills' ? body.style.top = '-200%' : 
          body.style.top = '-300%';
    };

  render() {
    return (
      <header className='header'>
        <div className='jumpTo'>
          <a href='#' onClick={this.slide} name='home'>Home</a>
          <a href='#' onClick={this.slide} name='about'>About</a>
          <a href='#' onClick={this.slide} name='skills'>Skills</a>
          <a href='#' onClick={this.slide} name='gallery'>Gallery</a>
        </div>
        <div className='links'>
          <a href='https://twitter.com/jacoboakley21' target='_blank'><img src='assets/icons/twitter.png' /></a>
          <a href='http://codepen.io/jacoboakley/' target='_blank'><img src='assets/icons/codepen.png' /></a>
          <a href='https://github.com/jacoboakley' target='_blank'><img src='assets/icons/github.png' /></a>
          <a href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img src='assets/icons/linkedin.png' /></a>
      </div>
      </header>
    )
  }
}

export default Header;