import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
},ref) => {
  return (
    <div className="post" ref={ref}>
        <div className="post_avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <h3>
                {displayName}{""}
                    <span className="post__headerSpecial">
                        {verified && <VerifiedRoundedIcon className="post__badge"/>} @{username}
                    </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>{text}</p>
            </div>
            <img src={image} alt=''/>
            <div className="post__footer">
            <ChatBubbleOutlineRoundedIcon fontSize='small'/>
            <RepeatRoundedIcon fontSize='small'/>
            <FavoriteBorderRoundedIcon fontSize='small'/>
            <PublishRoundedIcon fontSize='small'/>
            </div>     
        </div> 
    </div>
  )
});

export default Post
