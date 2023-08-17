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

const [mounted, setMounted] = React.useState(false);
React.useEffect(() => setMounted(true), []);

if (typeof window !== 'undefined') {
    window.onload = () => {
        document.getElementById('react-root')!.remove();
    };
}

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
      <div style={{ opacity: !mounted ? 0 : 1 }}>

            
      <Layout
        style={{
          minHeight: "100vh",
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
