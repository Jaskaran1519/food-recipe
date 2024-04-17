import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm_sans",
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable + dm_sans.variable}>{children}</body>
    </html>
  );
}
