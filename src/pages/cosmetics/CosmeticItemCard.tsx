import { Badge, Card, Col, Tooltip } from 'antd';
import { useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import { ForgeHammer } from 'assets/other';
import Image from 'components/Image';
import { CosmeticMatrixItem } from 'data/cosmetics';
import { Miner, MinerColor, MinerColorContrastText } from 'data/miner';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import CosmeticItemIcon from './CosmeticItemIcon';
import './CosmeticItemCard.css'

export default function CosmeticItemCard(props: {
  miner: Miner;
  item: CosmeticMatrixItem;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.cosmeticMatrixItems.get({
        miner: props.miner,
        name: props.item.name,
      }),
    [props.miner, props.item.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.cosmeticMatrixItems.add({
        miner: props.miner,
        name: props.item.name,
        isForged: false,
      });
    } else if (query.isForged) {
      db.cosmeticMatrixItems
        .where({
          miner: props.miner,
          name: props.item.name,
        })
        .delete();
    } else {
      db.cosmeticMatrixItems
        .where({
          miner: props.miner,
          name: props.item.name,
        })
        .modify({ isForged: true });
    }
  }, [db.cosmeticMatrixItems, props.miner, props.item.name, query]);

  return (
    <Col
      xxl={4}
      xl={4}
      lg={8}
      md={8}
      sm={8}
      xs={12}
      key={props.miner + props.item.name}
    >
      <Badge.Ribbon className="cosmetic-item-ribbon" text={props.item.name}>
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query?.isForged
              ? MinerColor[props.miner]
              : 'inherit',
            color: query?.isForged
              ? MinerColorContrastText[props.miner]
              : '#cccccc',
            outline:
              query && !query.isForged
                ? `3px solid ${MinerColor[props.miner]}`
                : undefined,
            transition: 'all 0.3s ease',
          }}
        >
          <CosmeticItemIcon item={props.item} />
          <Tooltip
            title={query && !query?.isForged ? 'Unforged' : undefined}
            trigger={isMobile ? 'click' : 'hover'}
            destroyTooltipOnHide
          >
            <Image
              alt={`${props.item.name} is acquired, but unforged`}
              src={ForgeHammer}
              style={{
                float: 'left',
                height: isMobile ? 30 : 20,
                marginTop: isMobile ? -30 : -20,
                opacity: query && !query?.isForged ? 1 : 0,
                width: 'auto',
              }}
            />
          </Tooltip>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
