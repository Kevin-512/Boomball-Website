import { Nunito_Sans, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--font-nunitoSans",
});

const luckiestGuy = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-luckiestGuy",
});

export const metadata = {
  title: "Boomball Extreme",
  description:
    "Explore the next generation game pitting 6 players against each other in a 3v3 format.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${nunitoSans.variable} ${luckiestGuy.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
