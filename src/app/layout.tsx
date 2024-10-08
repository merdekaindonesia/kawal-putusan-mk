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
  createTheme,
  type MantineColorsTuple,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { SearchParamsNotification } from "@/components/notification";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";

import MantineDatesProvider from "@/providers/mantine-dates-provider";
import { HomeNavbar } from "@/components/appshell";

export const metadata: Metadata = {
  title: `Merdeka Indonesia - #KawalPutusanMK`,
  description:
    "Website yang memantau dan mendokumentasikan gerakan #KawalPutusanMK dan gerakan-gerakan lainnya yang berjuang untuk keadilan dan demokrasi di Indonesia.",
  metadataBase: new URL("https://kawal-putusan-mk.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Merdeka Indonesia - #KawalPutusanMK",
    description: "Mendokumentasikan perjuangan rakyat untuk keadilan Indonesia",
    url: "/",
    type: "website",
    images: [
      {
        url: "/peringatan_darurat.jpeg",
        width: 1200,
        height: 630,
        alt: "#KawalPutusanMK",
      },
    ],
  },
};

const resistanceBlue: MantineColorsTuple = [
  "#ebeeff",
  "#d1d6fa",
  "#9faaf8",
  "#6a7cf7",
  "#4154f6",
  "#2b3cf6",
  "#222ff8",
  "#1823dd",
  "#101fc5",
  "#0019ad",
];

const mantineTheme = createTheme({
  fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  headings: {
    fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
  colors: { resistanceBlue },
  primaryColor: "resistanceBlue",
});

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
        <NextTopLoader color="#001489" />

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
