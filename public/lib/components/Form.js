import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: null,
      url: null
    }
  }

  updateTitle(e){
    this.setState({title: e.target.value})
  }
  updateUrl(e){
    this.setState({url: e.target.value})
  }

  updateInput(inputName, e){
    // es6
    this.setState({[inputName]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addBookmark(this.state);
    this.setState({
      title: null,
      url: null
    })
  }
  render(){
    let {title, url} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.updateInput.bind(this, 'title')} value={title} placeholder="Title" />
          <input onChange={this.updateInput.bind(this, 'url')} value={url} placeholder="Url" />
          <button type='submit'>Add Link</button>
        </form>
      </div>
    )
  }
}

export default Form
