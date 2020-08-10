import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src=""/>
                    <input type="text" placeholder="What's Happening?" name="tweet"/>
                </div>

                <input type="text" placeholder="Optional: Enter Image URL" className="tweetBox__imageInput"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>     
        </div>
    )
}

export default TweetBox
