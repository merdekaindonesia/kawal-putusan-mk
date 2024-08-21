"use client";

import { useMemo } from "react";
import { Anchor } from "@mantine/core";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import dayjs from "dayjs";
import NextLink from "next/link";

import { IProtestData } from "@/data/protest";

const columns: MRT_ColumnDef<IProtestData>[] = [
  {
    accessorKey: "datetime",
    header: "Tanggal",
  },
  {
    accessorKey: "location",
    header: "Lokasi",
  },
  {
    accessorKey: "source",
    header: "Sumber",
  },
];

export function ProtestTable({ data }: { data: IProtestData[] }) {
  const columns = useMemo<MRT_ColumnDef<IProtestData>[]>(
    () => [
      {
        accessorKey: "datetime",
        header: "Tanggal",
        sortingFn: "datetime",
        Cell: ({ cell }) =>
          dayjs(cell.getValue<Date>()).format("DD MMMM YYYY, HH:mm"),
      },
      {
        accessorFn: (row) => `${row.location} - ${row.detail_location}`,
        header: "Lokasi",
      },
      {
        accessorKey: "source",
        header: "Sumber",
        Cell: ({ cell }) => (
          <Anchor
            component={NextLink}
            underline="always"
            href={cell.getValue<string>()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cell.getValue<string>()}
          </Anchor>
        ),
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableDensityToggle: false,
    enableHiding: false,
    mantineTableProps: {
      highlightOnHover: false,
      striped: "odd",
      withColumnBorders: true,
      withRowBorders: true,
      withTableBorder: true,
    },
    initialState: {
      showGlobalFilter: true,
    },
  });

  return <MantineReactTable table={table} />;
}