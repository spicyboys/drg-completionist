import {
  Card,
  Checkbox,
  Col,
  Divider,
  Image as AntImage,
  Row,
  Tooltip,
} from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useCallback, useMemo } from 'react';
import { Credit } from 'assets/currencies';
import { Assignment, LostPack } from 'assets/other';
import Image from 'components/Image';
import { Pickaxe, PickaxeParts } from 'data/pickaxes';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';

const accentColor = '#dc8c13';
const CheckboxOptions: PickaxeParts[] = [
  'Blades',
  'Head',
  'Shaft',
  'Handle',
  'Pommel',
];

/** These type guards are used to get the fallback PNGs or JPGs for
 *  Ant's Image component, which only accepts strings and not ImgSrc's
 *  union type. (TypeScript is rather unhappy without them.)
 * */
const isPNGSrc = (imgSrc: ImgSrc): imgSrc is PNGSrc => true;
const isJPGSrc = (imgSrc: ImgSrc): imgSrc is JPGSrc => true;
const getFallbackSrc = (imgSrc: ImgSrc) =>
  isPNGSrc(imgSrc) ? imgSrc.png : isJPGSrc(imgSrc) ? imgSrc.jpg : undefined;

export default function PickaxeCard(props: { pickaxe: Pickaxe }) {
  // Get all matching queries when pickaxe name changes (i.e., only once, on mount)
  const db = useDB();
  const checkedParts = useSuspendedLiveQuery(
    () =>
      db.pickaxes
        .where({ name: props.pickaxe.name })
        .and((p) => p.part !== 'Paintjob')
        .toArray(),
    [props.pickaxe.name]
  ).map((p) => p.part);

  // Add and delete IndexedDB entries
  const setCheckedParts = useCallback(
    (values: CheckboxValueType[]) => {
      const newlyCheckedItems = values.filter(
        (v) => !checkedParts.includes(v as PickaxeParts)
      );
      if (newlyCheckedItems.length > 0) {
        db.pickaxes.bulkAdd(
          newlyCheckedItems.map((i) => ({
            name: props.pickaxe.name,
            part: i as PickaxeParts,
          }))
        );
      }

      const newlyUncheckedItems = checkedParts.filter(
        (v) => !values.includes(v)
      );
      if (newlyUncheckedItems.length > 0) {
        db.pickaxes
          .where({ name: props.pickaxe.name })
          .and((p) => newlyUncheckedItems.includes(p.part))
          .delete();
      }
    },
    [checkedParts, db.pickaxes, props.pickaxe.name]
  );

  const isComplete = useMemo(
    () => checkedParts.length === CheckboxOptions.length,
    [checkedParts.length]
  );

  const onHeaderClick = useCallback(() => {
    if (isComplete) {
      db.pickaxes
        .where({
          name: props.pickaxe.name,
        })
        .and((p) => p.part !== 'Paintjob')
        .delete();
    } else {
      db.pickaxes.bulkAdd(
        CheckboxOptions.filter((c) => !checkedParts.includes(c)).map((p) => ({
          name: props.pickaxe.name,
          part: p,
        }))
      );
    }
  }, [checkedParts, db.pickaxes, isComplete, props.pickaxe.name]);

  const isPartiallyComplete = useMemo(
    () =>
      checkedParts.length !== CheckboxOptions.length &&
      checkedParts.length !== 0,
    [checkedParts.length]
  );

  const iconSrc = useMemo(() => {
    switch (props.pickaxe.source) {
      case 'Assignment':
        return Assignment;
      case 'DLC':
        return Credit;
      case 'Lost Pack':
        return LostPack;
    }
  }, [props.pickaxe.source]);

  return (
    <Col xxl={6} xl={6} lg={8} md={12} sm={12} xs={24}>
      <Card
        hoverable
        title={
          <div onClick={onHeaderClick}>
            {props.pickaxe.name}
            <Image
              alt={`${props.pickaxe.name} is acquired via ${props.pickaxe.source}`}
              src={iconSrc}
              style={{
                filter: isComplete ? 'grayscale(1) invert(1)' : undefined,
                float: 'right',
                height: 24,
                width: 'auto',
              }}
            />
          </div>
        }
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
            <Tooltip
              destroyTooltipOnHide
              placement="bottom"
              title={`Obtained via ${props.pickaxe.source}${
                props.pickaxe.assignmentRank
                  ? ' at Rank ' + props.pickaxe.assignmentRank
                  : ''
              }`}
            >
              <AntImage
                alt={props.pickaxe.name}
                src={props.pickaxe.icon.webp}
                fallback={getFallbackSrc(props.pickaxe.icon)}
                style={{
                  border: '2px solid #cccccc',
                  height: 110,
                  width: 'auto',
                }}
              />
            </Tooltip>
          </Col>
          <Col span={2}>
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col span={11}>
            <Row align="middle" justify="space-between">
              <Checkbox.Group
                onChange={setCheckedParts}
                style={{ width: '100%' }}
                value={checkedParts}
              >
                {CheckboxOptions.map((option) => (
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
