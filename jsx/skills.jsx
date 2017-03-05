import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div id='skills'>
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

export default Skills;