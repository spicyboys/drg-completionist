import { Col, Row, Space, Tooltip } from "antd";
import Text from "antd/lib/typography/Text";
import { Currency, CurrencyIcons, CurrencyNames } from "utils/currency";
import { Overclock } from "./OverclockData";

export default function OverclockPrice(props: { overclock: Overclock }) {
  const { price } = props.overclock;

  return (
    <Row align={"middle"} justify={"space-around"}>
      {Object.entries(price).map(([currencyType, value]) => (
        <Col key={currencyType}>
          <Space>
            <Tooltip placement={"top"} title={CurrencyNames[currencyType as Currency]}>
              <img
                src={CurrencyIcons[currencyType as Currency]}
                alt={CurrencyNames[currencyType as Currency]}
                style={{ height: 20, width: "auto" }}
              />
            </Tooltip>
            <Text strong>{value}</Text>
          </Space>
        </Col>
      ))}
    </Row>
  );
}
