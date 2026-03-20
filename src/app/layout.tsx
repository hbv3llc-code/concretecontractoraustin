import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin Premier Concrete | Concrete Contractor Austin TX",
  description:
    "Austin Premier Concrete — expert concrete driveways, patios, foundations, and flatwork across Austin, TX. Licensed, insured, free estimates.",
  keywords:
    "concrete contractor Austin TX, concrete driveway Austin, concrete patio Austin, foundation repair Austin",
  openGraph: {
    title: "Austin Premier Concrete | Concrete Contractor Austin TX",
    description:
      "Expert concrete driveways, patios, foundations, and flatwork across Austin, TX. Licensed, insured, free estimates.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
