import { ConfigProvider, Layout } from "antd";

import useData from "./hooks/useData";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { PRIMARY_COLOR } from "./shared/colors";
import { Item } from "./shared/types";

const items: Item[] = useData();

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
          minHeight: "100svh",
        }}
      >
        <Header />
        <Main items={items} />
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
