import { Overclock } from "./OverclockData";
import { CurrencyIcons } from "utils/currency";
import { Col, Row } from "antd";
import Text from "antd/lib/typography/Text";

export default function OverclockPrice(props: { overclock: Overclock }) {
  const { price } = props.overclock;

  return (
    <Row align={"middle"} justify={"space-around"}>
      {Object.entries(price).map(([currencyType, value]) => (
        <Col key={currencyType}>
          <img
            src={CurrencyIcons[currencyType as keyof typeof CurrencyIcons]}
            alt={currencyType}
            style={{ height: 20, width: "auto" }}
          />
          <Text strong>{value}</Text>
        </Col>
      ))}
    </Row>
  );
}
