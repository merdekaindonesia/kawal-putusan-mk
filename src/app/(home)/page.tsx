import dynamic from "next/dynamic";

import { data as protestData } from "@/data/protest";
import { ProtestTable } from "@/entities/protest/components/table";

const ProtestMap = dynamic(() => import("@/entities/protest/components/map"), {
  loading: () => <p>loading map...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <section>
      {/* lokasi protes */}
      <section className="space-y-4">
        <h2 className="font-bold text-3xl">Lokasi Protes</h2>

        <div className="h-[max(40vh,_300px)]">
          <ProtestMap protestData={protestData} />
        </div>

        <ProtestTable data={protestData} />
      </section>
      {/* end of lokasi protes */}
    </section>
  );
}
