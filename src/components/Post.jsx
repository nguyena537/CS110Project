import React from 'react'
import './Post.css';
import defaultAvatar from '../assets/default avatar.png';
import heartSVG from '../assets/heart interact.svg';
import commentSVG from '../assets/comment interact.svg';
import defaultPhoto from '../assets/default photo.png';

const Post = (props) => {
  const { username, userImage, postImage, caption } = props;

  return (
    <div className='post'>
      <div className='post-handle'>
        <a href='/' alt='Change to user profile link'><img className='post-avatar' src={userImage ?? defaultAvatar} alt='Avatar'/></a>
        <p>@{username}</p>
      </div>

      <div className='post-photo'>
        <img className='post-photo-image' src={postImage} alt='Pic'/>
      </div>

      <div className='post-interact'>
        <img className='post-interact-heart' src={heartSVG} alt='Heart Interact'/>
        <img className='post-interact-comment' src={commentSVG} alt='Comment Interact'/>
      </div>

      <div className='post-text'>
        <p>{caption ?? "Test Caption"}</p>
        <p>Test Comment</p>
      </div>
    </div>
  )
}

export default Post