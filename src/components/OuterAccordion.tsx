import jsonData from "../data/source.json";
import { Collapse } from "antd";
import { Item } from "../shared/types";
import InnerAccordion from "./InnerAccordion";

const items: Item[] = Object.entries(jsonData).map(
  ([category, programs]: [string, Record<string, Record<string, string>>]) => ({
    key: category,
    header: category,
    content: <InnerAccordion programs={programs} />,
  })
);

const OuterAccordion = () => {
  return (
    <Collapse accordion>
      {items.map((item: Item) => (
        <Collapse.Panel key={item.key} header={item.header}>
          {item.content}
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

export default OuterAccordion;
