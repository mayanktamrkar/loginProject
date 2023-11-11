import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomThemeProvider from "@/theme/theme";
import ReduxProvider from "@/context/reduxProvider";
import SnackBarProvider from "@/context/snacbarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SnackBarProvider>
          <CustomThemeProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </CustomThemeProvider>
        </SnackBarProvider>
      </body>
    </html>
  );
}
