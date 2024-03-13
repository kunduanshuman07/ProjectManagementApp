import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { UserProvider } from "./UserContext";
export const metadata: Metadata = {
  title: "Project Management App",
  description: "A tool to manage project tasks within a team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>

      </body>
    </html>
  );
}
