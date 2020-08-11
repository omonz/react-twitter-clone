import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
           <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1164106878588260353/T1mqUQf9_400x400.jpg" />
           </div>
           <div className="post__body">
               <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            CPS {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                        
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone with react firebase</p>
                    </div>
               </div>
                <img src="https://pbs.twimg.com/card_img/1291836813372542978/6onEuGyc?format=jpg&name=small" alt=""/>  
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
           </div>
        </div>
    )
}

export default Post 
