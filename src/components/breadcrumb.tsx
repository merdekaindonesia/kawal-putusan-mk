"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, Anchor } from "@mantine/core";

export function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <Breadcrumbs>
      <Anchor component={Link} href={"/"}>
        Beranda
      </Anchor>
      {pathNames.map((link, index) => {
        let href = `/${pathNames.slice(0, index + 1).join("/")}`;
        // the link will be in kebab case, transform it to normal case
        let itemLink = link
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <Anchor component={Link} href={href}>
            {itemLink}
          </Anchor>
        );
      })}
    </Breadcrumbs>
  );
}
