import { unstable_cache } from "next/cache";
import { getTweet } from "react-tweet/api";

export const getCachedTweet = unstable_cache(
  async (id: string) => getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 }
);
