import React from 'react';
import './Widgets.css';
import { TwitterFollowButton, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetsContainer">
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={"1230282152371200001"} />

          <TwitterShareButton
            url={"https://facebook.com/codecps"}
            options={{ text: "#reactjs is awesome", via: "codecps" }}
          />
          <TwitterFollowButton screenName={"codecps"} />
        </div>
      </div>
    );
}

export default Widgets
