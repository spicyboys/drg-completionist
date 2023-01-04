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
import { MinerColor, MinerColorContrastText } from 'data/miner';
import { Pickaxe, PickaxeParts } from 'data/pickaxes';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';

const accentColor = MinerColor.Driller;
const contrastText = MinerColorContrastText.Driller;
const CheckboxOptions: PickaxeParts[] = [
  'Blades',
  'Head',
  'Shaft',
  'Handle',
  'Pommel',
];

/**
 * These type guards are used to get the fallback PNGs or JPGs for
 * Ant's Image component, which only accepts strings and not ImgSrc's
 * union type. (TypeScript is rather unhappy without them.)
 */
const isPNGSrc = (imgSrc: ImgSrc): imgSrc is PNGSrc => true;
const isJPGSrc = (imgSrc: ImgSrc): imgSrc is JPGSrc => true;
const getFallbackSrc = (imgSrc: ImgSrc) =>
  isPNGSrc(imgSrc) ? imgSrc.png : isJPGSrc(imgSrc) ? imgSrc.jpg : undefined;

export default function PickaxeCard(props: { pickaxe: Pickaxe }) {
  /**
   * Get all matching queries when pickaxe name changes (i.e., only once,
   * on mount)
   */
  const db = useDB();
  const checkedParts = useSuspendedLiveQuery(
    () =>
      db.pickaxes
        .where({ name: props.pickaxe.name })
        .and((p) => p.part !== 'Paintjob')
        .toArray(),
    [props.pickaxe.name]
  ).map((p) => p.part);

  /**
   * Check for newly checked and unchecked partsAdd and delete IndexedDB
   * entries and add and delete IndexedDB entries, respectively.
   */
  const setCheckedParts = useCallback(
    (values: CheckboxValueType[]) => {
      // Filter for parts that aren't currently checked and add entries
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

      // Filter for parts that were previously checked and delete entries
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

  // Checks if all checkboxes are currently checked.
  const isComplete = useMemo(
    () => checkedParts.length === CheckboxOptions.length,
    [checkedParts.length]
  );

  // Checks if only some of the checkboxes are currently checked.
  const isPartiallyComplete = useMemo(
    () =>
      checkedParts.length !== 0 &&
      checkedParts.length !== CheckboxOptions.length,
    [checkedParts.length]
  );

  /**
   * Toggle between checking and unchecking all checkboxes
   * when card header is clicked.
   * Also adds and deletes all IndexedDB entries appropriately.
   */
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // We only want to register clicks to the header
      if (
        e.target instanceof HTMLElement &&
        !e.target.matches('.ant-card-head, .ant-card-head *')
      ) {
        return;
      }

      if (isComplete) {
        // If all checked, delete all part entries from set (except Paintjob)
        db.pickaxes
          .where({
            name: props.pickaxe.name,
          })
          .and((p) => p.part !== 'Paintjob')
          .delete();
      } else {
        // Otherwise, add entries for all currently unchecked parts
        db.pickaxes.bulkAdd(
          CheckboxOptions.filter((c) => !checkedParts.includes(c)).map((p) => ({
            name: props.pickaxe.name,
            part: p,
          }))
        );
      }
    },
    [checkedParts, db.pickaxes, isComplete, props.pickaxe.name]
  );

  // Returns the appropriate icon based on the current pickaxe's source.
  const iconSrc = useMemo(() => {
    switch (props.pickaxe.source) {
      case 'Assignment':
        return Assignment;
      case 'DLC':
        return Credit;
      case 'Lost Pack':
        return LostPack;
      case 'Performance Pass':
        // FIXME: Add own icon for performance pass
        return Assignment;
    }
  }, [props.pickaxe.source]);

  return (
    <Col xxl={6} xl={8} lg={12} md={12} sm={12} xs={24}>
      <Card
        hoverable
        title={
          <div style={{ whiteSpace: 'break-spaces' }}>
            {props.pickaxe.name}
            <Image
              alt={`${props.pickaxe.name} is acquired via ${props.pickaxe.source}`}
              src={iconSrc}
              style={{
                filter: isComplete
                  ? `grayscale(1) invert(1) ${
                      props.pickaxe.source === 'Lost Pack'
                        ? 'brightness(0)'
                        : ''
                    }`
                  : undefined,
                float: 'right',
                height: 24,
                width: 'auto',
              }}
            />
          </div>
        }
        onClick={onClick}
        headStyle={{
          backgroundColor: isComplete ? accentColor : 'inherit',
          color: isComplete ? contrastText : '#cccccc',
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
          <Col span={11} style={{ textAlign: 'center' }}>
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
                style={{ width: '100%', whiteSpace: 'nowrap' }}
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
