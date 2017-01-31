import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='title'>
          <img src="https://avatars1.githubusercontent.com/u/19611074?v=3&u=40349c6968cc661e50fa97e1f691c8a7668aecfc&s=140" />
          <ul>
            <li>Jacob Oakley</li>
            <li>Front-end Developer </li>
          </ul>
        </div>
        <ul className='link'>
          <li><a href='#'>About Me</a></li>
          <li><a href='#'>My Skills</a></li>
          <li><a href='#'>My Work</a></li>
        </ul>
      </div>
    )
  }
}

export default Header;