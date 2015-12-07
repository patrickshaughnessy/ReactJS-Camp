import React from 'react';

class Link extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let {title, url} = this.props.link
    return (
      <div className="link">
        <a href={url}>{title}</a>
      </div>
    )
  }
}

export default Link
