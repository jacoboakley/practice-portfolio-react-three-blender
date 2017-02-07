import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
  }
  
  slide(event) {
    const checkName = event.target.name;
    const body = document.querySelector('.body');

    checkName == 'about' ? body.style.top = '10%' : checkName == 'skills' ? body.style.top = '-75%' : body.style.top = '-160%';
    };

  render() {
    return (
      <header className='header'>
        <div className='title'>
            <p>Jacob Oakley</p>
            <p>Front-end Developer </p>
        </div>
        <div className='link'>
          <a onClick={this.slide} name='about'>About Me</a>
          <a onClick={this.slide} name='skills'>My Skills</a>
          <a onClick={this.slide} name='gallery'>My Work</a>
        </div>
      </header>
    )
  }
}

export default Header;