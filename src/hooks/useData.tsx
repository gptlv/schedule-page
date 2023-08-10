import jsonData from "../data/source.json";
import { Collapse, Space, Button } from "antd";
import { Item } from "../shared/types";
export const useData = () => {
  const items: Item[] = Object.entries(jsonData).map(
    ([category, programs]) => ({
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
    })
  );
  return items; // Add this line to return the processed data
};

export default useData;
