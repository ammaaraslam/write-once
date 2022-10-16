import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NhostNextProvider, NhostClient } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <ThemeProvider
          forcedTheme={Component.theme || undefined}
          attribute="class"
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
