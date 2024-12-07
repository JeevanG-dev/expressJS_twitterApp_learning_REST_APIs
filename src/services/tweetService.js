import { Filter } from "bad-words";
import {
  createTweet as createTweetRepository,
  getTweets as getTweetsRepository,
  getTweetById as tweetByIdRepository,
  deleteTweet as deleteTweetbyIdRepository,
  updateTweet as updateTweetRepository,
} from "../repositories/tweetRepository.js";

export const createTweet = async ({ body, image }) => {
  //try to find blocked words in the tweet body and if ant exists don't
  //create the tweet and return an error message

  const filter = new Filter();

  if (filter.isProfane(body)) {
    throw new Error("tweet contains bad words");
  }

  const tweet = await createTweetRepository({ body, image });
  return tweet;
};

export const getTweets = async () => {
  const tweets = await getTweetsRepository();

  return tweets;
};

export const getTweetById = async (id) => {
  const tweets = await tweetByIdRepository(id);

  if (!tweets) {
    throw {
      message: "Tweet not found",
      status: 404,
    };
  }

  return tweets;
};

export const deleteTweet = async (id) => {
  try {
    const tweet = await deleteTweetbyIdRepository(id);
    return tweet;


  } catch (error) {


    throw error

  }
};


export const updateTweet = async (id, body) =>{

  try {

    const tweet = await updateTweetRepository(id,body)

    return tweet;
    
  } catch (error) {

    throw error
    
  }
}