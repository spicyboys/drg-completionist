import { Overclock } from "./OverclockData";
import currencies from "assets/currencies";
import { useEffect, useState } from "react";
import { Col, Row, Space, Tooltip } from "antd";
import Text from "antd/lib/typography/Text";

enum CurrencyNames {
  credits = "Credits",
  bismor = "Bismor",
  croppa = "Croppa",
  enorPearl = "Enor Pearls",
  jadiz = "Jadiz",
  magnite = "Magnite",
  umanite = "Umanite"
}

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
    <Row justify={"space-around"}>
      {Object.entries(price).map(([currencyType, value]) =>
        <Col key={currencyType}>
          <Space>
            <Tooltip placement={"top"} title={CurrencyNames[currencyType as keyof typeof CurrencyNames]}>
              <img
                src={icons[currencyType as keyof typeof icons]}
                alt={CurrencyNames[currencyType as keyof typeof CurrencyNames]}
                style={{ height: 20, width: "auto" }}
              />
            </Tooltip>
            <Text strong>{value}</Text>
          </Space>
        </Col>
      )}
    </Row>
  );
}
