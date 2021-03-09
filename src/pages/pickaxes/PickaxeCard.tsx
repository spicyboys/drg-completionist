import { Card, Checkbox, Col, Divider, Row } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useEffect, useState } from 'react';
import Image from 'components/Image';
import { Pickaxe } from 'data/pickaxes';

const accentColor = '#dc8c13';
const checkboxOptions = ['Blades', 'Head', 'Shaft', 'Handle', 'Pommel'];

export default function PickaxeCard(props: { pickaxe: Pickaxe }) {
  const [checkedParts, setCheckedParts] = useState<CheckboxValueType[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isPartiallyComplete, setIsPartiallyComplete] = useState(false);

  useEffect(() => {
    setIsComplete(checkedParts.length === checkboxOptions.length);
    setIsPartiallyComplete(
      checkedParts.length !== 0 &&
        checkedParts.length !== checkboxOptions.length
    );
  }, [checkedParts]);

  const onChange = (checked: CheckboxValueType[]) => setCheckedParts(checked);

  const onClick = () =>
    setCheckedParts(
      checkedParts.length === checkboxOptions.length
        ? []
        : (checkboxOptions as CheckboxValueType[])
    );

  return (
    <Col xxl={6} xl={6} lg={8} md={12} sm={12} xs={24}>
      <Card
        hoverable
        title={<div onClick={onClick}>{props.pickaxe.name}</div>}
        headStyle={{
          backgroundColor: isComplete ? accentColor : 'inherit',
          color: isComplete ? '#1a1a1a' : '#cccccc',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        style={
          isPartiallyComplete
            ? {
                outline: `3px solid ${accentColor}`,
              }
            : undefined
        }
      >
        <Row justify="space-between">
          <Col span={11}>
            <Image
              alt={props.pickaxe.name}
              src={props.pickaxe.icon}
              style={{
                border: '2px solid #cccccc',
                height: 110,
                width: 'auto',
              }}
            />
          </Col>
          <Col span={2}>
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col span={11}>
            <Row align="middle" justify="space-between">
              <Checkbox.Group
                onChange={onChange}
                style={{ width: '100%' }}
                value={checkedParts}
              >
                {checkboxOptions.map((option) => (
                  <Col key={option} span={24}>
                    <Checkbox value={option}>{option}</Checkbox>
                  </Col>
                ))}
              </Checkbox.Group>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
