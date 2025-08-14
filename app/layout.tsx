import Navbar from "@/components/Navbar";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-[#FFFFFF] ${albert_sans.className} ${montserratAlternates.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
