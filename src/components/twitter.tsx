import { Suspense } from "react";
import {
  TweetSkeleton,
  EmbeddedTweet,
  TweetNotFound,
  type TwitterComponents,
} from "react-tweet";
import Image from "next/image";

import { getCachedTweet } from "@/utils/twitter";

const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
};

export async function CachedTweet({ id }: { id: string }) {
  try {
    const tweet = await getCachedTweet(id);

    return tweet ? (
      <Suspense fallback={<TweetSkeleton />}>
        <EmbeddedTweet tweet={tweet} components={components} />
      </Suspense>
    ) : (
      <TweetNotFound />
    );
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
}
