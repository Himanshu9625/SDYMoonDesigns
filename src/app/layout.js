import "./globals.css";

export const metadata = {
  title: "SDYMoonDesigns",
  description: "Welcome to the official portfolio of MoonDesigns - creative solutions for your digital presence. Explore our work, learn about our services, and get in touch to bring your ideas to life.",
  icons: {
    icon: "/BrandLogo.svg",
    apple: "/BrandLogo.svg",
  },
  openGraph: {
    title: "SDYMoonDesigns",
    description: "Welcome to the official portfolio of MoonDesigns - creative solutions for your digital presence. Explore our work, learn about our services, and get in touch to bring your ideas to life.",
    siteName: "SDYMoonDesigns",
    images: [
      {
        url: "/SocialThumbnail.png",
        width: 1200,
        height: 630,
        alt: "SDYMoonDesigns Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SDYMoonDesigns",
    description: "Welcome to the official portfolio of MoonDesigns - creative solutions for your digital presence. Explore our work, learn about our services, and get in touch to bring your ideas to life.",
    images: ["/SocialThumbnail.png"],
  },
  keywords: ["SDYMoonDesigns", "Portfolio", "Creative", "Design", "Web Development", "Digital Solutions"],
  authors: [{ name: "SDYMoonDesigns" }],
  creator: "SDYMoonDesigns",
  publisher: "SDYMoonDesigns",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
