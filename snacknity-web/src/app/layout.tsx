import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Snacknity",
  description: "Snacknity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Navbar />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
