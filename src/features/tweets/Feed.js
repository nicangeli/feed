import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

const Feed = ({ tweets }) => (
  <ul>
    {tweets.map((tweet) => (
      <Tweet key={tweet.id} tweet={tweet} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  tweets: state.tweets.tweets,
});
export default connect(mapStateToProps)(Feed);
