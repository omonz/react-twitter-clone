import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            {/* Head */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <TweetBox/>

            {/* Post */}
            <Post/>
        </div>
    )
}

export default Feed
