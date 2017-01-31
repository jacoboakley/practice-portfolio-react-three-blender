import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <ul className='link'>
          <li><a href='https://twitter.com/jacoboakley21' target='_blank'>Stalk Me</a></li>
          <li><a href='http://codepen.io/jacoboakley/' target='_blank'>Judge Me</a></li>
          <li><a href='https://github.com/jacoboakley' target='_blank'>Copy Me</a></li>
          <li><a href='https://www.linkedin.com/in/jacoboakley' target='_blank'>Hire Me</a></li>
        </ul>
      </div>
    )
  }
}

export default Footer;