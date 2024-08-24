import { Anchor } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";

import { Breadcrumb } from "@/components/breadcrumb";
import { DefaultContainer } from "@/components/container";
import { List } from "@/components/list";
import { CachedTweet } from "@/components/twitter";

export const metadata: Metadata = {
  title: `Donasi - Merdeka Indonesia`,
};

const donasiList = [
  <div className="space-y-2" key={"1"}>
    <Anchor
      component={Link}
      href={"https://x.com/humaniesproject"}
      className="text-lg font-bold"
      underline="always"
    >
      Humanies (Huma Inisiatif Indonesia)
    </Anchor>

    <div className="text-lg font-semibold">
      <p>Bank Mandiri</p>
      <p>1260012252432</p>
      <p>an Huma Inisiatif Indonesia</p>
    </div>

    <CachedTweet id="1826836560144449613" />
  </div>,
];

export default function Info() {
  return (
    <DefaultContainer className="space-y-4 pr-6">
      <Breadcrumb />

      <h2 className="text-3xl font-bold">Donasi</h2>

      <h3 className="text-xl font-semibold">
        Yayasan / gerakan yang kami percayai:
      </h3>

      <List listItem={donasiList} />
    </DefaultContainer>
  );
}
