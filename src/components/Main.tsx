import { Layout } from "antd";
import OuterAccordion from "./OuterAccordion";
const { Content } = Layout;

const Main = () => {
  return (
    <Content style={{ padding: "16px" }}>
      <OuterAccordion />
    </Content>
  );
};

export default Main;
