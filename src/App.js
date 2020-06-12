import React from 'react';
import { create } from 'react-redux'
import PostForm from './components/PostForm'
import FetchedPosts from './components/FetchedPosts';
import Posts from './components/Posts'


function App() {
  return (
    <div className='container'>
      <PostForm />
      <h2>Синхронные посты</h2>
      <Posts />
      <h2>Асинхронные посты</h2>
      <FetchedPosts />
    </div>
  )
  
}
export default App;
