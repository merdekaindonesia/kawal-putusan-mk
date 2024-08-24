import dynamic from "next/dynamic";

import { Image } from "@mantine/core";
import NextImage from "next/image";
import { DefaultContainer } from "@/components/container";

import { data as demoData } from "@/data/demo";
import { DemoTable } from "@/entities/demo/components/table";
import peringatanDarurat from "@/assets/images/peringatan_darurat.jpeg";

const DemoMap = dynamic(() => import("@/entities/demo/components/map"), {
  loading: () => <p>loading map...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <section className="space-y-4">
      <section className="flex justify-center items-center">
        <video src={"/peringatan_darurat.mp4"} autoPlay muted controls loop />
      </section>

      {/* lokasi demo */}
      <DefaultContainer className="space-y-4">
        <h2 className="font-bold text-3xl">Lokasi Demo</h2>

        <div className="h-[max(40vh,_300px)]">
          <DemoMap demoData={demoData} />
        </div>

        <DemoTable data={demoData} />
      </DefaultContainer>
      {/* end of lokasi demo */}

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
