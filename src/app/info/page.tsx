import { Anchor, Image } from "@mantine/core";
import NextLink from "next/link";
import { IconBrandX } from "@tabler/icons-react";
import { DefaultContainer } from "@/components/container";
import NextImage from "next/image";

export default function Info() {
  return (
    <DefaultContainer className="pr-6 space-y-4">
      <h2 className="font-bold text-3xl">
        Info Penting Bagi yang Turun ke Jalan!
      </h2>

      <div className="flex items-center">
        <p>Sumber: </p>

        <IconBrandX size={18} className="ml-2 mr-1" />
        <Anchor
          component={NextLink}
          underline="always"
          href="https://x.com/txtdrjkt/status/1826226270843318547"
          target="_blank"
          rel="noopener noreferrer"
        >
          @txtdrjkt
        </Anchor>
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
