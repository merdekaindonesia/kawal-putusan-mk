"use client";

import { ReactNode } from "react";
import { List as MantineList, ListProps } from "@mantine/core";

type IListProps = ListProps & {
  listItem: ReactNode[];
};

export function List({ listItem, ...ListProps }: IListProps) {
  return (
    <MantineList listStyleType="number" {...ListProps}>
      {listItem.map((item) => (
        <MantineList.Item>{item}</MantineList.Item>
      ))}
    </MantineList>
  );
}
