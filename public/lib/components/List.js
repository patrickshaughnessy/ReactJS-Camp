import React from 'react';
import Link from './Link'

class List extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let content = this.props.bookmarks.map(bookmark => {
      return <Link link={bookmark} key={bookmark.id} />
    })
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default List
