import { Image } from "@mantine/core";
import NextImage from "next/image";
import { Metadata } from "next";

import { DefaultContainer } from "@/components/container";
import { CachedTweet } from "@/components/twitter";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: `Persiapan Demo - Merdeka Indonesia`,
};

export default function PersiapanDemo() {
  return (
    <DefaultContainer className="pr-6 space-y-4">
      <Breadcrumb />

      <h2 className="font-bold text-3xl">
        Info Penting Bagi yang Turun ke Jalan!
      </h2>

      <div className="space-y-2">
        <p>Sumber: </p>

        <CachedTweet id="1826226270843318547" />
      </div>

      <section className="grid lg:grid-cols-2 gap-4">
        <Image
          component={NextImage}
          alt="Info Penting Bagi yang Turun ke Jalan"
          src="https://pbs.twimg.com/media/GVgPEcgasAAzas9?format=jpg&name=medium"
          width={500}
          height={300}
        />
        <Image
          component={NextImage}
          alt="Info Penting Bagi yang Turun ke Jalan (2)"
          src="https://pbs.twimg.com/media/GVgPEc2XgAAOAmV?format=jpg&name=medium"
          width={500}
          height={300}
        />
        <Image
          component={NextImage}
          alt="Info Penting Bagi yang Turun ke Jalan (3)"
          src="https://pbs.twimg.com/media/GVgPEcaaUAAxyxR?format=jpg&name=medium"
          width={500}
          height={300}
        />
      </section>
    </DefaultContainer>
  );
}
