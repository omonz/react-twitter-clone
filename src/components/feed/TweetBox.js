import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './../../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
          displayName: "Omonzebaguan Emmanuel",
          username: "codecps",
          verified: true,
          image: tweetImage,
          avatar: "https://pbs.twimg.com/profile_images/1164106878588260353/T1mqUQf9_400x400.jpg",
          text: tweetMessage,
        });

        setTweetImage("");
        setTweetMessage("");
    } 

    return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://pbs.twimg.com/profile_images/1164106878588260353/T1mqUQf9_400x400.jpg" />
            <input
             onChange={(e) => setTweetMessage(e.target.value)}
             type="text" 
             placeholder="What's Happening?"
              name="tweet" 
              value={tweetMessage}
            />
          </div>

          <input
            onChange={(e) => setTweetImage(e.target.value) }
            type="text"
            placeholder="Optional: Enter Image URL"
            className="tweetBox__imageInput"
            value={tweetImage}
          />
          <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
        </form>
      </div>
    );
}

export default TweetBox
