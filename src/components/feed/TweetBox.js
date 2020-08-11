import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1164106878588260353/T1mqUQf9_400x400.jpg"/>
                    <input type="text" placeholder="What's Happening?" name="tweet"/>
                </div>

                <input type="text" placeholder="Optional: Enter Image URL" className="tweetBox__imageInput"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>     
        </div>
    )
}

export default TweetBox
