import { Layout } from "antd";
import { BORDER_COLOR } from "../shared/colors";

const { Footer: AntdFooter } = Layout;

const Footer = () => {
  return (
    <AntdFooter
      style={{
        background: "rgba(0, 0, 0, 0.02)",
        textAlign: "right",
        borderTop: `1px solid ${BORDER_COLOR}`,
      }}
    >
      2023
    </AntdFooter>
  );
};

export default Footer;
