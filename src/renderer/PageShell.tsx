import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { ConfigProvider, Layout } from "antd";

import Header from "../components/Header";
import Main from "../components/Main";
// import Footer from "../components/Footer";
import { PRIMARY_COLOR } from "./../shared/colors";

export { PageShell };

const PageShell = ({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Noah",
              colorPrimary: PRIMARY_COLOR,
            },
          }}
        >
          <div
            style={{
              opacity: !mounted ? 0 : 1,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <Layout
              style={{
                minHeight: "100vh",
                // transition: "height 0.5s ease-in-out",
              }}
            >
              <Header />
              <Main>{children}</Main>
              {/* <Footer /> */}
            </Layout>
          </div>
        </ConfigProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
};
