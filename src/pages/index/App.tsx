import { ConfigProvider, Layout } from "antd";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { PRIMARY_COLOR } from "../../shared/colors";

const App = () => {
  return (
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
        <Main />
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
