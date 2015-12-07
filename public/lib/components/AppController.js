import React from 'react';
import List from './List';
import Form from './Form';
import API from '../API'

class AppController extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bookmarks: []
    }

  }

  componentDidMount(){
    API.getBookmarks()
      .done(data => {
        this.setState({
          bookmarks: data.links
        })
      })
    // $.get('/api/links')
    //   .success(data => {
    //     this.setState({
    //       bookmarks: data.links
    //     })
    //   })
  }

  addBookmark(newBookmark){
    API.addBookmark(newBookmark)
      .done(data => {
        this.setState({bookmarks: this.state.bookmarks.concat(data)})
      })

    // $.post('/api/links', newBookmark)
    //   .success(data => {
    //     this.setState({bookmarks: this.state.bookmarks.concat(data)})
    //   })
  }

  render(){
    return (
      <div>
        <h2>Bookmarks!</h2>
        <List bookmarks={this.state.bookmarks} />
        <Form addBookmark={this.addBookmark.bind(this)} />
      </div>
    )
  }
}

export default AppController
