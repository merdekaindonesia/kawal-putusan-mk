"use client";

import { ListProps, List as MantineList } from "@mantine/core";
import { ReactNode } from "react";

type IListProps = ListProps & {
  listItem: ReactNode[];
};

export function List({ listItem, ...ListProps }: IListProps) {
  return (
    <MantineList listStyleType="number" {...ListProps}>
      {listItem.map((item, index) => (
        <MantineList.Item key={index}>{item}</MantineList.Item>
      ))}
    </MantineList>
  );
}
