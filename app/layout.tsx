import type { Metadata } from "next";
import "./globals.css";

const defaultMeta = {
  title: "BOLT 12 | This is how we bitcoin in the future!",
  description:
    "BOLT 12 is a protocol upgrade to the Lightning network that will enable re-usable payment requests, increased receiver privacy, and better censorship resistance. Come see the bitcoin of the future!",
  image: {
    url: "https://bolt12.org/bolt-12-poster.png",
    width: 1920,
    height: 1080,
    alt: "A futuristic city in space with the BOLT 12 logo",
  },
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  icons: [{rel: "icon", url: "/favicon/favicon.ico"}],
  openGraph:{
    images: [
      {
        url: defaultMeta.image.url,
        width: defaultMeta.image.width,
        height: defaultMeta.image.height,
        alt: defaultMeta.image.alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    // title: defaultMeta.title,
    // description: defaultMeta.description,
    images: [defaultMeta.image.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Pacifico&family=Pixelify+Sans:wght@400..700&family=Protest+Revolution&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/pqu3bot.css"
        ></link>
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
