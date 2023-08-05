import jsonData from "./source.json";
import { Button, Collapse, Space, Layout } from "antd";

const { Header, Content, Footer } = Layout;

const items = Object.entries(jsonData).map(([category, programs]) => ({
  key: category,
  header: category,
  content: (
    <Collapse accordion>
      {Object.entries(programs).map(([program, buttonData]) => (
        <Collapse.Panel key={program} header={program}>
          <Space direction="vertical">
            {Object.entries(buttonData).map(([groupName, buttonLink]) => (
              <Button block type="primary" href={buttonLink} target="_blank">
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
    <Layout style={{ gap: "0.75rem", background: "none" }}>
      <Header style={{ background: "#F5F5F5" }}>Учебное расписание</Header>
      <Content>
        <Collapse accordion>
          {items.map((item) => (
            <Collapse.Panel key={item.key} header={item.header}>
              {item.content}
            </Collapse.Panel>
          ))}
        </Collapse>
      </Content>
      <Footer>2023</Footer>
    </Layout>
  );
};

export default App;
