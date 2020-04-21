import { createSlice } from "@reduxjs/toolkit";
import { getInitialTweets, getTweetsAfterId } from "../../api";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    lastFetchedId: null,
    tweets: [],
  },
  reducers: {
    prependTweets: (state, action) => {
      state.tweets = action.payload.tweets.concat(state.tweets);
    },
    tweetsFetchedSuccess: (state, action) => {
      state.lastFetchedId = action.payload.lastFetchedId;
    },
  },
});

const { actions, reducer } = tweetsSlice;

export const { prependTweets, tweetsFetchedSuccess } = actions;

const loadTweets = () => async (dispatch, getState) => {
  const { lastFetchedId } = getState().tweets;
  let data;
  try {
    if (lastFetchedId) {
      data = await getTweetsAfterId(lastFetchedId);
    } else {
      data = await getInitialTweets();
    }
    const [latestTweet] = data;
    dispatch(prependTweets({ tweets: data }));
    dispatch(tweetsFetchedSuccess({ lastFetchedId: latestTweet.id }));
  } catch (error) {
    console.error(error);
  }
};

export const appLoaded = () => (dispatch, getState) => {
  setInterval(() => {
    dispatch(loadTweets());
  }, 2000);
};

export default reducer;
