import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import { ConfigProvider, Layout } from "antd";

import Header from "../components/Header";
import Main from "../components/Main";
// import Footer from "../components/Footer";
import { PRIMARY_COLOR } from "./../shared/colors";

export { PageShell }

const PageShell = ({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) => {
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
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header />
        <Main>{children}</Main>
        {/* <Footer /> */}
      </Layout>
    </ConfigProvider>
    </PageContextProvider>
    </React.StrictMode>
  );
};
