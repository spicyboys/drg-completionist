import { Divider, Image, Tooltip } from "antd";
import Miner from "types/miner";
import { MinerWeapon, MinerWeaponOutlines } from "utils/minerWeapons";

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
