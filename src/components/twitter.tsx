import Image from "next/image";
import { Suspense } from "react";
import {
  EmbeddedTweet,
  TweetNotFound,
  TweetSkeleton,
  type TwitterComponents,
} from "react-tweet";

import { getCachedTweet } from "@/utils/twitter";

const components: TwitterComponents = {
  // eslint-disable-next-line jsx-a11y/alt-text
  AvatarImg: (props) => <Image {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
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
