import "./globals.css";

export const metadata = {
  title: "Sdymoondesign",
  description: "Welcome to the official portfolio of MoonDesigns - creative solutions for your digital presence. Explore our work, learn about our services, and get in touch to bring your ideas to life.",
  icons: {
    icon: "/BrandLogo.svg",
    apple: "/BrandLogo.svg",
  },
  openGraph: {
    title: "Sdymoondesign",
    description: "Welcome to the official portfolio of MoonDesigns - creative solutions for your digital presence. Explore our work, learn about our services, and get in touch to bring your ideas to life.",
    siteName: "Sdymoondesign",
    images: [
      {
        url: "/Social-Thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Sdymoondesign Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sdymoondesign",
    description: "Welcome to the official portfolio of MoonDesigns - creative solutions for your digital presence. Explore our work, learn about our services, and get in touch to bring your ideas to life.",
    images: ["/Social-Thumbnail.jpg"],
  },
  keywords: ["Sdymoondesign", "Portfolio", "Creative", "Design", "Web Development", "Digital Solutions"],
  authors: [{ name: "Sdymoondesign" }],
  creator: "Sdymoondesign",
  publisher: "Sdymoondesign",
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
