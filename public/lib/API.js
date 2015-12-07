import {get, post} from 'jquery';

let API = {
  addBookmark(newBookmark){
    return $.post('/api/links', newBookmark);
  },
  getBookmarks(){
    return $.get('/api/links');
  }
}

export default API;
