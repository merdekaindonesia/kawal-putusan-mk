"use client";

import { AppShell, Burger, Group, NavLink, Image, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="xs"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
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
                href="/rangkuman"
                variant={pathname === "/rangkuman" ? "ghost" : "transparent"}
              >
                Rangkuman
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
          label="Bantuan Hukum"
          onClick={toggle}
          component={Link}
          href="/lembaga-bantuan-hukum"
          active={pathname === "/lembaga-bantuan-hukum"}
        />

        <NavLink
          label="Rangkuman"
          onClick={toggle}
          component={Link}
          href="/rangkuman"
          active={pathname === "/rangkuman"}
        />

        <NavLink
          label="Info Penting!"
          onClick={toggle}
          component={Link}
          href="/info"
          active={pathname === "/info"}
        />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <div className="text-center text-xs bg-white p-8 mt-8">
        <p>&copy; {currentYear} - #KawalPutusanMK</p>
      </div>
    </AppShell>
  );
}
