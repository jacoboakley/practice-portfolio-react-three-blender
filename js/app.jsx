import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx'
import Body from './body.jsx'
import Footer from './footer.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

var mountApp = document.querySelector('#app');

ReactDOM.render( <App />, mountApp );