import React, { Component } from 'react';
import { SyncLoader } from 'react-spinners'

class Loading extends Component {
  render() {
    return (
      <div className="container" style={{
        display: 'center',
        justifyContent: 'center',
        paddingTop: '50px'
      }}>
        <div className='sweet-loading'>
          <SyncLoader
            color={'#7A69C7'} 
            loading={this.props.loading} 
          />
        </div>
      </div>
    );
  }
}

export default Loading;