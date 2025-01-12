import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
