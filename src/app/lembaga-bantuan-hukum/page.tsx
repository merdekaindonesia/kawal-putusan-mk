import { Image } from "@mantine/core";
import NextImage from "next/image";

import { DefaultContainer } from "@/components/container";
import { CachedTweet } from "@/components/twitter";

export default function Info() {
  return (
    <DefaultContainer className="pr-6 space-y-4">
      <h2 className="font-bold text-3xl">Lembaga Bantuan Hukum</h2>

      <div className="space-y-2">
        <p>Sumber: </p>

        <CachedTweet id="1826472379717222872" />
      </div>

      <section className="font-bold text-3xl pt-12">
        Hotline: 085283226297
      </section>

      <section className="grid lg:grid-cols-2 gap-4">
        <Image
          component={NextImage}
          alt="Info Penting Bagi yang Turun ke Jalan"
          src="https://pbs.twimg.com/media/GVju8gfbgAEgdAk?format=jpg&name=medium"
          width={500}
          height={300}
        />
        <Image
          component={NextImage}
          alt="Info Penting Bagi yang Turun ke Jalan (2)"
          src="https://pbs.twimg.com/media/GVju8hPbgAM9fb4?format=jpg&name=medium"
          width={500}
          height={300}
        />
      </section>
    </DefaultContainer>
  );
}
