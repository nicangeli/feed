import React from "react";
import styled from "styled-components";

const TweetBox = styled.li`
  display: flex;
`;

const ProfileImage = styled.img`
  padding: 20px;
  border-radius: 50%;
`;

const TweetDetails = styled.p`
  background: #dadada;
`;

const Tweet = ({ tweet }) => (
  <TweetBox>
    <ProfileImage src={tweet.image} />
    <div>
      <span>{tweet.username}</span>
      <TweetDetails>{tweet.text}</TweetDetails>
    </div>
  </TweetBox>
);

export default Tweet;
