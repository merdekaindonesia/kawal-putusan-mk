"use client";

import {
  Anchor,
  AppShell,
  Burger,
  Button,
  Group,
  Image,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NextImage from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import GarudaIndonesia from "@/assets/images/garuda_indonesia.jpeg";
import { IconBrandGithub } from "@tabler/icons-react";

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
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="xs"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <div className="flex items-center justify-center gap-3">
              <Image
                component={NextImage}
                alt="Garuda Indonesia"
                radius="md"
                height={50}
                width={50}
                className="drop-shadow"
                src={GarudaIndonesia}
              />
              <p className="text-lg font-bold">#KawalPutusanMK</p>
            </div>

            <Group ml="xl" gap={8} visibleFrom="md">
              <Button
                component={Link}
                href="/"
                variant={pathname === "/" ? "ghost" : "transparent"}
              >
                Beranda
              </Button>

              <Button
                component={Link}
                href="/rangkuman"
                variant={pathname === "/rangkuman" ? "ghost" : "transparent"}
              >
                Rangkuman
              </Button>

              <Button
                component={Link}
                href="/lembaga-bantuan-hukum"
                variant={
                  pathname === "/lembaga-bantuan-hukum"
                    ? "ghost"
                    : "transparent"
                }
              >
                Bantuan Hukum
              </Button>

              <Button
                component={Link}
                href="/donasi"
                variant={pathname === "/donasi" ? "ghost" : "transparent"}
              >
                Donasi
              </Button>

              <Button
                component={Link}
                href="/persiapan-demo"
                variant={
                  pathname === "/persiapan-demo" ? "ghost" : "transparent"
                }
              >
                Persiapan Demo
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
        />

        <NavLink
          label="Rangkuman"
          onClick={toggle}
          component={Link}
          href="/rangkuman"
          active={pathname === "/rangkuman"}
        />

        <NavLink
          label="Bantuan Hukum"
          onClick={toggle}
          component={Link}
          href="/lembaga-bantuan-hukum"
          active={pathname === "/lembaga-bantuan-hukum"}
        />

        <NavLink
          label="Donasi"
          onClick={toggle}
          component={Link}
          href="/donasi"
          active={pathname === "/donasi"}
        />

        <NavLink
          label="Persiapan Demo"
          onClick={toggle}
          component={Link}
          href="/persiapan-demo"
          active={pathname === "/persiapan-demo"}
        />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <div className="mt-8 flex items-center justify-center gap-4 bg-white p-8">
        <p>&copy; {currentYear} - #KawalPutusanMK</p>

        <p>-</p>

        <Anchor
          component={Link}
          className="flex gap-2"
          href={"https://github.com/merdekaindonesia/kawal-putusan-mk"}
        >
          Open Source di Github
          <IconBrandGithub stroke={1.5} />
        </Anchor>
      </div>
    </AppShell>
  );
}
