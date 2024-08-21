"use client";

import "dayjs/locale/id";
import dayjs from "dayjs";
dayjs.locale("id");

import { DatesProvider, DatesProviderSettings } from "@mantine/dates";

const settings: DatesProviderSettings = {
  locale: "id",
  weekendDays: [0],
};

export default function MantineDatesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DatesProvider settings={settings}>{children}</DatesProvider>;
}
