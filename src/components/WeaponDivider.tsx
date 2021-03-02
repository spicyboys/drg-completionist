import { Divider, Image, Tooltip } from 'antd';
import { Miner } from 'utils/miner';
import { MinerWeapon, WeaponOutlines } from 'utils/weapons';

export default function WeaponDivider(props: { weapon: MinerWeapon<Miner> }) {
  return (
    <Divider orientation="center">
      <Tooltip title={props.weapon} placement="right">
        <Image
          alt={props.weapon}
          preview={false}
          src={WeaponOutlines[props.weapon]}
          style={{ height: 75, width: 'auto' }}
        />
      </Tooltip>
    </Divider>
  );
}
