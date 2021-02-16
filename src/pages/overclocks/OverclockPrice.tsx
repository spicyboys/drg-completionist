import { Overclock } from "./OverclockData";
import currencies from "assets/currencies";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Text from "antd/lib/typography/Text";

type PriceIcons = {
  credits: string;
  bismor?: string;
  croppa?: string;
  enorPearl?: string;
  jadiz?: string;
  magnite?: string;
  umanite?: string
}

export default function OverclockPrice(props: { overclock: Overclock }) {
  const [isLoading, setIsLoading] = useState(true);
  const [icons, setIcons] = useState<PriceIcons | null>(null);
  const { price } = props.overclock;

  useEffect(() => {
    Promise
      .all([
        currencies['credits'],
        currencies['bismor'],
        currencies['croppa'],
        currencies['enorPearl'],
        currencies['jadiz'],
        currencies['magnite'],
        currencies['umanite']
      ])
      .then(([creditsIcon, bismorIcon, croppaIcon, enorPearlIcon, jadizIcon, magniteIcon, umaniteIcon]) => {
        setIcons({
          credits: creditsIcon.default,
          bismor: bismorIcon.default,
          croppa: croppaIcon.default,
          enorPearl: enorPearlIcon.default,
          jadiz: jadizIcon.default,
          magnite: magniteIcon.default,
          umanite: umaniteIcon.default
        });
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || icons === null) {
    return <p>loading</p>;
  }

  return (
    <Row align={"middle"} justify={"space-around"}>
      {Object.entries(price).map(([currencyType, value]) =>
        <Col key={currencyType}>
          <img
            src={icons[currencyType as keyof typeof icons]}
            alt={currencyType}
            style={{ height: 20, width: "auto" }}
          />
          <Text strong>{value}</Text>
        </Col>
      )}
    </Row>
  );
}
