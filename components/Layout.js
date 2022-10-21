import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, id, title, onlyMeta = true }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="WriteOnce, Articles, Markdown Editor, Hashnode, Dev.to, Medium"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WriteOnce" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content="https://localhost:3000/og-image.png"
        />
        <meta property="og:image:alt" content="" />
        <meta property="og:url" content="https://localhost:3000" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://localhost:3000/og-image.png"
        />
        <meta name="twitter:site" content="WriteOnce" />
      </Head>
      {!onlyMeta && <Header />}
      <main
        id={id}
        className="w-full h-full font-inter z-0 bg-white dark:bg-[#0F0F0F]"
      >
        {children}
      </main>
      {!onlyMeta && <Footer />}
    </div>
  );
};

export default Layout;
