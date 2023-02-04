import { Divider, Grid, Row, Tooltip } from 'antd';
import React, { useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import {
  CategoryBeards,
  CategoryHeadwear,
  CategoryMoustaches,
  CategorySideburns,
} from 'assets/cosmeticMatrixCoreItems';
import Image from 'components/Image';
import {
  CosmeticMatrixBeards,
  CosmeticMatrixHeadwears,
  CosmeticMatrixItems,
  CosmeticMatrixMoustaches,
  CosmeticMatrixSideburns,
} from 'data/cosmetics';
import { Miner } from 'data/miner';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import CosmeticItemCard from './CosmeticItemCard';

const { useBreakpoint } = Grid;

export default function CosmeticMatrixCoreItemPage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const acquiredCosmetics = await db.cosmeticMatrixItems
      .where('miner')
      .anyOf(miner)
      .filter((item) => item.isForged)
      .count();
    return acquiredCosmetics / CosmeticMatrixItems.length;
  }, []);

  return (
    <MinerPageLayout category="Cosmetics" getProgress={getProgress}>
      {(miner) => (
        <>
          <CosmeticHeadwears miner={miner}></CosmeticHeadwears>
          <CosmeticMoustaches miner={miner}></CosmeticMoustaches>
          <CosmeticBeards miner={miner}></CosmeticBeards>
          <CosmeticSideburns miner={miner}></CosmeticSideburns>
        </>
      )}
    </MinerPageLayout>
  );
}

export function CosmeticHeadwears(props: { miner: Miner }) {
  return (
    <React.Fragment key={props.miner + '-headwears'}>
      <Divider orientation="center">
        <Tooltip
          placement={useBreakpoint()['xs'] ? 'top' : 'right'}
          title={`${props.miner} Headwear`}
          trigger={isMobile ? 'click' : 'hover'}
        >
          <Image
            alt={`${props.miner} Headwear`}
            src={CategoryHeadwear}
            style={{ height: 50, width: 'auto' }}
          />
        </Tooltip>
      </Divider>
      <Row gutter={[16, 16]}>
        {CosmeticMatrixHeadwears.map((headwear) => (
          <CosmeticItemCard
            key={props.miner + headwear.name}
            miner={props.miner}
            item={headwear}
          />
        ))}
      </Row>
    </React.Fragment>
  );
}

export function CosmeticBeards(props: { miner: Miner }) {
  return (
    <React.Fragment key={props.miner + '-beards'}>
      <Divider orientation="center">
        <Tooltip
          placement={useBreakpoint()['xs'] ? 'top' : 'right'}
          title={`${props.miner} Beards`}
          trigger={isMobile ? 'click' : 'hover'}
        >
          <Image
            alt={`${props.miner} Beards`}
            src={CategoryBeards}
            style={{ height: 50, width: 'auto' }}
          />
        </Tooltip>
      </Divider>
      <Row gutter={[16, 16]}>
        {CosmeticMatrixBeards.map((beard) => (
          <CosmeticItemCard
            key={props.miner + beard.name}
            miner={props.miner}
            item={beard}
          />
        ))}
      </Row>
    </React.Fragment>
  );
}

export function CosmeticMoustaches(props: { miner: Miner }) {
  return (
    <React.Fragment key={props.miner + '-moustache'}>
      <Divider orientation="center">
        <Tooltip
          placement={useBreakpoint()['xs'] ? 'top' : 'right'}
          title={`${props.miner} Moustaches`}
          trigger={isMobile ? 'click' : 'hover'}
        >
          <Image
            alt={`${props.miner} Moustaches`}
            src={CategoryMoustaches}
            style={{ height: 50, width: 'auto' }}
          />
        </Tooltip>
      </Divider>
      <Row gutter={[16, 16]}>
        {CosmeticMatrixMoustaches.map((moustache) => (
          <CosmeticItemCard
            key={props.miner + moustache.name}
            miner={props.miner}
            item={moustache}
          />
        ))}
      </Row>
    </React.Fragment>
  );
}

export function CosmeticSideburns(props: { miner: Miner }) {
  return (
    <React.Fragment key={props.miner + '-sideburns'}>
      <Divider orientation="center">
        <Tooltip
          placement={useBreakpoint()['xs'] ? 'top' : 'right'}
          title={`${props.miner} Sideburns`}
          trigger={isMobile ? 'click' : 'hover'}
        >
          <Image
            alt={`${props.miner} Sideburns`}
            src={CategorySideburns}
            style={{ height: 50, width: 'auto' }}
          />
        </Tooltip>
      </Divider>
      <Row gutter={[16, 16]}>
        {CosmeticMatrixSideburns.map((sideburn) => (
          <CosmeticItemCard
            key={props.miner + sideburn.name}
            miner={props.miner}
            item={sideburn}
          />
        ))}
      </Row>
    </React.Fragment>
  );
}
