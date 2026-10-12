import React from 'react'
import Stories from './Stories'
import Suggestion from './Suggestion'
import Posts from './Posts'
function Feed() {
  return (
    <>
    <div className=' story  '><Stories/></div>
    <div><Posts/></div>
</>
  )
}

export default Feed