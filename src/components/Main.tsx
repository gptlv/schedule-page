import { Layout } from "antd";
const { Content } = Layout;

const Main = ({children} : {children: React.ReactNode}) => {
  return (
    <Content style={{ padding: "16px" }}>
      {children}
    </Content>
  );
};

export default Main;
