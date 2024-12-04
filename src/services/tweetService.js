import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

export const createTweet = async ({ body,image }) => {
  //try to find blocked words in the tweet body and if ant exists don't
  //create the tweet and return an error message

  const filter = new Filter();

  if (filter.isProfane(body)) {
    throw new Error("tweet contains bad words");
  }

  const tweet = await createTweetRepository({ body,image });
  return tweet;
};
