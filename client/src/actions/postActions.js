import { FETCH_POSTS, NEW_POST } from './actionTypes';

export const fetchPosts = () => dispatch => {
  fetch('http://localhost:3000/posts')
    .then(res => res.json())
    // .then(posts => this.setState({ posts: posts }))
    .then(posts => 
      dispatch({ 
        type: FETCH_POSTS,
        payload: posts
      })
    );
}

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => 
      dispatch({ 
        type: NEW_POST,
        payload: post
      })
    );
}