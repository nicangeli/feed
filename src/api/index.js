import axios from "axios";

const baseUrl =
  "http://magiclab-twitter-interview.herokuapp.com/nickangeli/api";

const NUMBER_OF_TWEETS_TO_FETCH = 20;

const getInitialTweets = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}?count=${NUMBER_OF_TWEETS_TO_FETCH}`,
  });

  return response.data;
};

const getTweetsAfterId = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}?count=${NUMBER_OF_TWEETS_TO_FETCH}&afterId=${id}`,
  });

  return response.data;
};

export { getInitialTweets, getTweetsAfterId };
