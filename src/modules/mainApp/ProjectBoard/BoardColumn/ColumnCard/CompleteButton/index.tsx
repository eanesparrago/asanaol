import { Button, Tooltip } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

function CompleteButton() {
  return (
    <Tooltip title="Mark task complete" mouseEnterDelay={1}>
      <Button type="text" icon={<CheckCircleOutlined />} />
    </Tooltip>
  );
}

export default CompleteButton;
