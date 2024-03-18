import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Text } from "../text";

const DealsChart = () => {
  return (
    <Card
      style={{ height: "100%" }}
      styles={{
        header: { padding: "8px 16px" },
        body: { padding: "24px 24px 0 24px" },
      }}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <DollarOutlined />
          <Text size="sm" style={{ marginLeft: "0.5rem" }}>
            Deals
          </Text>
        </div>
      }
    ></Card>
  );
};

export default DealsChart;
