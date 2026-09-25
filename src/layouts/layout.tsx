import React from "react";
import "../tailwind.css";

export type LayoutProps = {
  title?: string;
  canonical?: string;
  children: React.ReactNode;
};
const siteTitle = "elbkr";
const siteUrl = "https://elbkr.is-a.dev";
const description = "Developer of Vibe, a Discord music bot";

const Layout: React.FC<LayoutProps> = ({ title = siteTitle, canonical = "/", children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/jpeg" href="/avatar.jpg" />
      <link rel="canonical" href={`${siteUrl}${canonical}`} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="elbkr,Vibe,Discord bot" />
      <meta name="author" content="elbkr" />
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="color-scheme" content="dark" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/`} />
      <meta property="og:image" content={`${siteUrl}/avatar.jpg`} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}/avatar.jpg`} />
      <meta name="application-name" content={siteTitle} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                name: "elbkr",
                url: `${siteUrl}/`,
                sameAs: ["https://github.com/elbkr"],
                image: { "@type": "ImageObject", url: `${siteUrl}/avatar.jpg` },
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                name: siteTitle,
                url: `${siteUrl}/`,
                description,
                publisher: { "@id": `${siteUrl}/#person` },
              },
            ],
          }),
        }}
      />

      {/* MUST NOT REMOVE */}
      <style id="tailwind-styles">/*tailwind*/</style>
    </head>
    <body className="font-sans">
      {children}
      {process.env.EXTRA_SCRIPTS && <div dangerouslySetInnerHTML={{ __html: process.env.EXTRA_SCRIPTS }} />}
    </body>
  </html>
);

export default Layout;
