import { Divider, Image, Tooltip } from "antd";
import { MinerWeaponOutlines } from "assets/weapons";
import { Miner } from "utils/miner";
import { MinerWeapon } from "utils/weapons";

export default function WeaponDivider(props: { weapon: MinerWeapon<Miner> }) {
  return (
    <Divider orientation="center">
      <Tooltip title={props.weapon} placement={"right"}>
        <Image
          src={MinerWeaponOutlines[props.weapon]}
          height={75}
          preview={false}
          alt={props.weapon}
        />
      </Tooltip>
    </Divider>
  );
}
