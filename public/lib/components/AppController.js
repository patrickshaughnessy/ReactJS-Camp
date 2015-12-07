import React from 'react';
import List from './List'

class AppController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks: []
    }
  }
  render(){
    return (
      <div>
        <h2>Bookmarks!</h2>
        <List bookmarks={this.state.bookmarks} />
      </div>
    )
  }
}

export default AppController
