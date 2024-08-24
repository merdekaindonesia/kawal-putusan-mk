"use client";

import { Anchor } from "@mantine/core";
import dayjs from "dayjs";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import NextLink from "next/link";
import { useMemo } from "react";

import { IDemoData } from "@/data/demo";

export function DemoTable({ data }: { data: IDemoData[] }) {
  const columns = useMemo<MRT_ColumnDef<IDemoData>[]>(
    () => [
      {
        accessorKey: "datetime",
        header: "Tanggal",
        sortingFn: "datetime",
        Cell: ({ cell }) =>
          dayjs(cell.getValue<Date>()).format("DD MMMM YYYY, HH:mm"),
      },
      {
        accessorFn: (row) =>
          row.detail_location
            ? `${row.location} - ${row.detail_location}`
            : row.location,
        id: "lokasi",
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
    [],
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
      sorting: [
        {
          id: "datetime",
          desc: true,
        },
      ],
    },
  });

  return <MantineReactTable table={table} />;
}
