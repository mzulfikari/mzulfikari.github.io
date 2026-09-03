import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://mzulfikari.github.io";
const TITLE = "Morteza Zolfaghari — Backend Developer | Python & Django";
const DESCRIPTION =
  "Backend Developer focused on Python, Django, API Engineering, System Design and scalable software architecture.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Morteza Zolfaghari",
    "Backend Developer",
    "Python",
    "Django",
    "Django REST Framework",
    "System Design",
    "API Engineering",
    "Software Architecture",
    "DevOps",
    "PostgreSQL",
    "Redis",
    "Docker",
  ],
  authors: [{ name: "Morteza Zolfaghari" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Morteza Zolfaghari",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#09090B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Morteza Zolfaghari",
              jobTitle: "Backend Developer",
              url: SITE_URL,
              sameAs: ["https://github.com/mzulfikari"],
              knowsAbout: [
                "Python",
                "Django",
                "Django REST Framework",
                "System Design",
                "API Engineering",
                "Software Architecture",
              ],
            }),
          }}
        />
      </head>
      <body className="noise-overlay bg-[#09090B] text-[#F4F4F5] antialiased">
        {children}
      </body>
    </html>
  );
}
