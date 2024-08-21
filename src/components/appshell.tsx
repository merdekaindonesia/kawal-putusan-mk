"use client";

import { AppShell, Burger, Group, NavLink, Image, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome } from "@tabler/icons-react";
import NextImage from "next/image";

import GarudaIndonesia from "@/assets/images/garuda_indonesia.jpeg";

export function HomeNavbar({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="xs"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <div className="flex justify-center items-center gap-3">
              <Image
                component={NextImage}
                alt="Garuda Indonesia"
                radius="md"
                height={50}
                width={50}
                className="drop-shadow"
                src={GarudaIndonesia}
              />
              <p className="font-bold text-lg">#KawalPutusanMK</p>
            </div>

            <Group ml="xl" gap={8} visibleFrom="sm">
              <Button
                component={Link}
                href="/"
                variant={pathname === "/" ? "light" : "transparent"}
              >
                Beranda
              </Button>

              <Button
                component={Link}
                href="/rangkuman"
                variant={pathname === "/rangkuman" ? "light" : "transparent"}
              >
                Rangkuman
              </Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <NavLink
          label="Beranda"
          onClick={toggle}
          component={Link}
          href="/"
          active={pathname === "/"}
          leftSection={<IconHome size="1.25rem" stroke={1.5} />}
        />

        <NavLink
          label="rangkuman"
          onClick={toggle}
          component={Link}
          href="/rangkuman"
          active={pathname === "/rangkuman"}
          leftSection={<IconHome size="1.25rem" stroke={1.5} />}
        />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <div className="text-center text-xs bg-white p-8 mt-8">
        <p>&copy; {currentYear} - #KawalPutusanMK</p>
      </div>
    </AppShell>
  );
}
