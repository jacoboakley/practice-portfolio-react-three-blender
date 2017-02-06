import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='title'>
            <p>Jacob Oakley</p>
            <p>Front-end Developer </p>
        </div>
        <div className='link'>
          <a href='#'>About Me</a>
          <a href='#'>My Skills</a>
          <a href='#'>My Work</a>
        </div>
      </div>
    )
  }
}

export default Header;