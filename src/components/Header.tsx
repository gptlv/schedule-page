import { PageHeader } from "@ant-design/pro-layout";
import { BORDER_COLOR } from "../shared/colors";

const Header = () => {
  return (
    <div>
      <PageHeader
        avatar={{
          src: "https://raw.githubusercontent.com/lernya/schedule-page/main/src/assets/logo.png",
          shape: "square",
          size: "large",
          draggable: false,
        }}
        style={{
          background: "rgba(0, 0, 0, 0.02)",
          borderBottom: `1px solid ${BORDER_COLOR}`,
        }}
        title="Учебное расписание"
      ></PageHeader>
    </div>
  );
};

export default Header;