import { Divider, Image, Tooltip } from "antd";
import { Miner } from "utils/miner";
import { WeaponOutlines , MinerWeapon } from "utils/weapons";


export default function WeaponDivider(props: { weapon: MinerWeapon<Miner> }) {
  return (
    <Divider orientation="center">
      <Tooltip title={props.weapon} placement={"right"}>
        <Image
          src={WeaponOutlines[props.weapon]}
          height={75}
          preview={false}
          alt={props.weapon}
        />
      </Tooltip>
    </Divider>
  );
}
