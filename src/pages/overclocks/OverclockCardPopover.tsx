import { Card, Col, Divider, Row, Space, Tooltip, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { memo } from 'react';
import { isMobile } from 'react-device-detect';
import { Buff as BuffIcon, Nerf as NerfIcon } from 'assets/overclocks/arrows';
import Image from 'components/Image';
import { Miner } from 'utils/miner';
import { MinerWeapon, WeaponOutlines } from 'utils/weapons';
import { Overclock } from '../../data/overclocks';
import OverclockIcon from './OverclockIcon';
import OverclockPrice from './OverclockPrice';

const { Paragraph, Text, Title } = Typography;

export default memo(function OverclockCardPopover(props: {
  overclock: Overclock;
  weapon: MinerWeapon<Miner>;
}) {
  return (
    <Card bordered={false} style={{ width: 340 }}>
      <Meta
        style={{}}
        description={
          <Row align="middle" justify="space-around">
            <Col span={16}>
              <Title level={4}>{props.overclock.name}</Title>
            </Col>
            <Col span={8}>
              <Tooltip
                placement="bottomRight"
                title={props.weapon}
                trigger={isMobile ? 'click' : 'hover'}
              >
                <Image
                  alt={props.weapon}
                  src={WeaponOutlines[props.weapon]}
                  style={{ height: 50, width: 'auto' }}
                />
              </Tooltip>
            </Col>
          </Row>
        }
      />
      <Divider style={{ marginTop: '12px', marginBottom: '24px' }} />
      <OverclockIcon overclock={props.overclock} />
      <Divider dashed />
      {props.overclock.effects.buffs.map((buff) => (
        <Row key={buff} justify="center">
          <Col>
            <Space>
              <Image
                alt="Buff Effect"
                src={BuffIcon}
                style={{ height: 10, width: 'auto' }}
              />
              <Text strong type="success">
                {buff}
              </Text>
            </Space>
          </Col>
        </Row>
      ))}
      {props.overclock.effects.nerfs.map((nerf) => (
        <Row key={nerf} justify="center">
          <Col>
            <Space>
              <Image
                alt="Nerf Effect"
                src={NerfIcon}
                style={{ height: 10, width: 'auto' }}
              />
              <Text strong type="danger">
                {nerf}
              </Text>
            </Space>
          </Col>
        </Row>
      ))}
      <Divider dashed />
      <Paragraph>{props.overclock.description}</Paragraph>
      <Divider dashed />
      <OverclockPrice overclock={props.overclock} />
    </Card>
  );
});
