import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Footer />
      </div>
    )
  }
}

var mountApp = document.querySelector('#app');

ReactDOM.render( <App />, mountApp );