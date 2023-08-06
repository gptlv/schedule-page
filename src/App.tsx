import jsonData from "./source.json";
import { ConfigProvider, Button, Collapse, Space, Layout } from "antd";

import { PageHeader } from "@ant-design/pro-layout";

const { Content, Footer } = Layout;

const items = Object.entries(jsonData).map(([category, programs]) => ({
  key: category,
  header: category,
  content: (
    <Collapse accordion>
      {Object.entries(programs).map(([program, buttonData]) => (
        <Collapse.Panel key={program} header={program}>
          <Space wrap>
            {Object.entries(buttonData).map(([groupName, buttonLink]) => (
              <Button
                type="primary"
                href={buttonLink as string}
                target="_blank"
              >
                {groupName}
              </Button>
            ))}
          </Space>
        </Collapse.Panel>
      ))}
    </Collapse>
  ),
}));

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Noah",
          colorPrimary: "#f42a3e",
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100svh",
        }}
      >
        <PageHeader
          avatar={{
            src: "../logo.png",
            shape: "square",
            size: "large",
          }}
          style={{
            background: "rgba(0, 0, 0, 0.02)",
            borderBottom: "1px solid #d9d9d9",
          }}
          title="Учебное расписание"
        ></PageHeader>

        <Content style={{ padding: "16px" }}>
          <Collapse accordion>
            {items.map((item) => (
              <Collapse.Panel key={item.key} header={item.header}>
                {item.content}
              </Collapse.Panel>
            ))}
          </Collapse>
        </Content>
        <Footer
          style={{
            background: "rgba(0, 0, 0, 0.02)",
            textAlign: "right",
            borderTop: "1px solid #d9d9d9",
          }}
        >
          2023
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
