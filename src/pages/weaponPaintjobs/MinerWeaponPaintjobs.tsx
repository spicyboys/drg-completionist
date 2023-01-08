import { Divider, Grid, Row, Tooltip } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Assignment } from 'assets/other';
import Image from 'components/Image';
import { Miner } from 'data/miner';
import {
  CommonWeaponPaintjob,
  CommonWeaponPaintjobs,
  MatrixWeaponPaintjob,
  MatrixWeaponPaintjobs,
} from 'data/weaponPaintjobs';
import CommonWeaponPaintjobCard from './CommonWeaponPaintjobCard';
import MatrixWeaponPaintjobCard from './MatrixWeaponPaintjobCard';

const { useBreakpoint } = Grid;

export default function MinerWeaponPaintjobs<T extends Miner>(props: {
  miner: T;
}) {
  return (
    <>
      <React.Fragment key={props.miner + '-matrix-paintjobs'}>
        <>
          <Divider orientation='center'>
            <Tooltip
              placement={useBreakpoint()['xs'] ? 'top' : 'right'}
              title={`Common ${props.miner} Weapon Paintjobs`}
              trigger={isMobile ? 'click' : 'hover'}
            >
              <Image
                alt={`${props.miner} Common Weapon Paintjobs`}
                src={Assignment}
                style={{ height: 75, width: 'auto' }}
              />
            </Tooltip>
          </Divider>
          <Row gutter={[16, 16]}>
            {MatrixWeaponPaintjobs.map((paintjob) => (
              <MatrixWeaponPaintjobCard
                key={props.miner + paintjob.name + paintjob.id}
                miner={props.miner}
                weaponPaintjob={paintjob as MatrixWeaponPaintjob}
              />
            ))}
            {CommonWeaponPaintjobs.map((paintjob) => (
              <CommonWeaponPaintjobCard
                key={props.miner + paintjob.name + paintjob.id}
                miner={props.miner}
                weaponPaintjob={paintjob as CommonWeaponPaintjob}
              />
            ))}
          </Row>
        </>
      </React.Fragment>
    </>
  );
}
