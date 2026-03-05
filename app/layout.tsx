import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankita Bhagawati — Full Stack Developer",
  description:
    "Portfolio of Ankita Bhagawati, Full Stack Developer skilled in .NET, Angular, React, and SQL with 4+ years of experience building scalable applications.",
  keywords: ["Full Stack Developer", ".NET", "Angular", "React", "SQL", "Ankita Bhagawati"],
  openGraph: {
    title: "Ankita Bhagawati — Full Stack Developer",
    description: "4+ years building scalable web apps with .NET, Angular, React & SQL.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
