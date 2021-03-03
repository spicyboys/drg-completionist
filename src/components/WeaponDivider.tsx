import { Divider, Grid, Tooltip } from 'antd';
import { isMobile } from 'react-device-detect';
import Image from 'components/Image';
import { Miner } from 'utils/miner';
import { MinerWeapon, WeaponOutlines } from 'utils/weapons';

const { useBreakpoint } = Grid;

export default function WeaponDivider(props: { weapon: MinerWeapon<Miner> }) {
  return (
    <Divider orientation="center">
      <Tooltip
        placement={useBreakpoint()['xs'] ? 'top' : 'right'}
        title={props.weapon}
        trigger={isMobile ? 'click' : 'hover'}
      >
        <Image
          alt={props.weapon}
          src={WeaponOutlines[props.weapon]}
          style={{ height: 75, width: 'auto' }}
        />
      </Tooltip>
    </Divider>
  );
}
