import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";

import {
  MantineProvider,
  ColorSchemeScript,
  Box,
  DEFAULT_THEME,
  type MantineThemeOverride,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { SearchParamsNotification } from "@/components/notification";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";

import MantineDatesProvider from "@/providers/mantine-dates-provider";
import { HomeNavbar } from "@/components/appshell";

export const metadata: Metadata = {
  title: "#KawalPutusanMK",
  description: "Merdeka Indonesia #KawalPutusanMK",
};

const mantineTheme: MantineThemeOverride = {
  fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  headings: {
    fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
  primaryColor: "blue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>

      <body className={inter.className}>
        <NextTopLoader />

        <MantineProvider theme={mantineTheme}>
          <MantineDatesProvider>
            <ModalsProvider>
              <Notifications
                position="top-right"
                zIndex={1000}
                autoClose={10000}
              />

              <Suspense>
                <SearchParamsNotification />
              </Suspense>

              <Box bg={"gray.1"}>
                <HomeNavbar>{children}</HomeNavbar>
              </Box>
            </ModalsProvider>
          </MantineDatesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
