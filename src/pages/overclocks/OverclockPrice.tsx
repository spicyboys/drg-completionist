import { Col, Row, Space, Tooltip } from 'antd';
import Text from 'antd/lib/typography/Text';
import Image from 'components/Image';
import { CurrencyIcons, CurrencyNames } from 'data/currency';
import type { Currency } from 'types/currency';
import type { Overclock } from 'types/overclock';

export default function OverclockPrice(props: { overclock: Overclock }) {
  const { price } = props.overclock;

  return (
    <Row align="middle" justify="space-around">
      {Object.entries(price).map(([currencyType, value]) => (
        <Col key={currencyType}>
          <Space>
            <Tooltip
              placement="top"
              title={CurrencyNames[currencyType as Currency]}
            >
              <Image
                src={CurrencyIcons[currencyType as Currency]}
                alt={CurrencyNames[currencyType as Currency]}
                style={{ height: 20, width: 'auto' }}
              />
            </Tooltip>
            <Text strong>{value}</Text>
          </Space>
        </Col>
      ))}
    </Row>
  );
}
