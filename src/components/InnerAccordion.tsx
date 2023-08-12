import { Collapse, Space, Button } from "antd";
const style: React.CSSProperties = { width: "117px", padding: "4px 8px" };

type Props = { programs: Record<string, Record<string, string>> };

const InnerAccordion = ({ programs }: Props) => {
  return (
    <Collapse accordion>
      {Object.entries(programs).map(
        ([program, buttonData]: [string, Record<string, string>]) => (
          <Collapse.Panel key={program} header={program}>
            <Space wrap style={{ justifyContent: "center" }}>
              {Object.entries(buttonData).map(
                ([groupName, buttonLink]: [string, string]) => (
                  <Button
                    type="primary"
                    href={buttonLink}
                    target="_blank"
                    style={style}
                  >
                    {groupName}
                  </Button>
                )
              )}
            </Space>
          </Collapse.Panel>
        )
      )}
    </Collapse>
  );
};

export default InnerAccordion;
