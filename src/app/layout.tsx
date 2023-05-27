import { NavigationBar } from "@/components/NavigationBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <NavigationBar />
    </>
  );
};
