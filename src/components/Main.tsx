import { Layout, Collapse } from "antd";
import { Item } from "../shared/types";
const { Content } = Layout;

type Props = { items: Item[] };

const Main = ({ items }: Props) => {
  return (
    <Content style={{ padding: "16px" }}>
      <Collapse accordion>
        {items.map((item: Item) => (
          <Collapse.Panel key={item.key} header={item.header}>
            {item.content}
          </Collapse.Panel>
        ))}
      </Collapse>
    </Content>
  );
};

export default Main;
