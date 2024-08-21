import dynamic from "next/dynamic";

import { Image } from "@mantine/core";
import NextImage from "next/image";
import { DefaultContainer } from "@/components/container";

import { data as protestData } from "@/data/protest";
import { ProtestTable } from "@/entities/protest/components/table";
import peringatanDarurat from "@/assets/images/peringatan_darurat.jpeg";

const ProtestMap = dynamic(() => import("@/entities/protest/components/map"), {
  loading: () => <p>loading map...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <section className="space-y-4">
      <section className="flex justify-center items-center">
        <video src={"/peringatan_darurat.mp4"} autoPlay muted controls loop />
      </section>

      {/* lokasi protes */}
      <DefaultContainer className="space-y-4">
        <h2 className="font-bold text-3xl">Lokasi Protes</h2>

        <div className="h-[max(40vh,_300px)]">
          <ProtestMap protestData={protestData} />
        </div>

        <ProtestTable data={protestData} />
      </DefaultContainer>
      {/* end of lokasi protes */}

      <section className="flex justify-center items-center">
        <div className="w-[32rem]">
          <Image
            component={NextImage}
            alt="Peringatan Darurat"
            src={peringatanDarurat}
            width={500}
            height={300}
          />
        </div>
      </section>
    </section>
  );
}
