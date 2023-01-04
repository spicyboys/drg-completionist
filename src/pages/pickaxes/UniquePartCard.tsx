import { Card, Col, Image as AntImage, Row, Tooltip } from 'antd';
import { useCallback, useMemo, useRef } from 'react';
import { Credit } from 'assets/currencies';
import { Assignment, LostPack } from 'assets/other';
import Image from 'components/Image';
import { MinerColor, MinerColorContrastText } from 'data/miner';
import { PickaxeUniquePart } from 'data/pickaxes';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';

const accentColor = MinerColor.Engineer;
const contrastText = MinerColorContrastText.Engineer;

// These type guards are used to get the fallback PNGs or JPGs for
//   Ant's Image component, which only accepts strings and not ImgSrc's
//   union type. (TypeScript is rather unhappy without them.)
const isPNGSrc = (imgSrc: ImgSrc): imgSrc is PNGSrc => true;
const isJPGSrc = (imgSrc: ImgSrc): imgSrc is JPGSrc => true;
const getFallbackSrc = (imgSrc: ImgSrc) =>
  isPNGSrc(imgSrc) ? imgSrc.png : isJPGSrc(imgSrc) ? imgSrc.jpg : undefined;

export default function UniquePartCard(props: {
  uniquePart: PickaxeUniquePart;
}) {
  // Get matching IndexedDB entry on mount
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () => db.pickaxeUniques.get({ name: props.uniquePart.name }),
    [props.uniquePart]
  );

  /** When clicked, add new entry to IndexedDB if Paintjob doesn't exist,
   *  or delete its entry if it does. */
  const toggleEntry = useCallback(() => {
    if (query === undefined) {
      db.pickaxeUniques.add({ name: props.uniquePart.name });
    } else {
      db.pickaxeUniques.where({ name: props.uniquePart.name }).delete();
    }
  }, [db.pickaxeUniques, props.uniquePart, query]);

  /** Returns the appropriate icon based on the current pickaxe's source. */
  const iconSrc = useMemo(() => {
    switch (props.uniquePart.source) {
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
  }, [props.uniquePart.source]);

  // This prevents the regular onClick event from triggering if it is on the Image element.
  const imageRef = useRef<HTMLDivElement>(null);
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        e.target instanceof HTMLElement &&
        !imageRef.current?.contains(e.target)
      ) {
        toggleEntry();
      }
    },
    [toggleEntry]
  );

  return (
    <Col xxl={6} xl={8} lg={12} md={12} sm={12} xs={24}>
      <Card
        hoverable
        title={
          <div style={{ whiteSpace: 'break-spaces' }}>
            {props.uniquePart.name}
            <Image
              alt={`${props.uniquePart.name} is acquired via ${props.uniquePart.source}`}
              src={iconSrc}
              style={{
                filter: query
                  ? `grayscale(1) invert(1) ${
                      props.uniquePart.source === 'Lost Pack'
                        ? 'brightness(100)'
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
        headStyle={{
          backgroundColor: query ? accentColor : 'inherit',
          color: query ? contrastText : '#cccccc',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        onClick={onClick}
      >
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Tooltip
              destroyTooltipOnHide
              placement="bottom"
              title={`Unique Part obtained via ${props.uniquePart.source}`}
            >
              <div style={{ display: 'inline-block' }} ref={imageRef}>
                <AntImage
                  alt={props.uniquePart.name}
                  src={props.uniquePart.icon.webp}
                  fallback={getFallbackSrc(props.uniquePart.icon)}
                  style={{
                    border: '2px solid #cccccc',
                    height: 110,
                    width: 'auto',
                  }}
                />
              </div>
            </Tooltip>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
