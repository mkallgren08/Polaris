import React, { Component } from 'react';
import loading from './loading.svg';

<<<<<<< HEAD
//Configuring the Auth0 callback

=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
class Callback extends Component {
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }

    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;