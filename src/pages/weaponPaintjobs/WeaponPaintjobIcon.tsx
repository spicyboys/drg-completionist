import Image from 'components/Image';
import {
  CommonWeaponPaintjob,
  MatrixWeaponPaintjob,
  UniqueWeaponPaintjob,
} from 'data/weaponPaintjobs';

export default function WeaponPaintjobIcon(props: {
  weaponPaintjob: CommonWeaponPaintjob | MatrixWeaponPaintjob | UniqueWeaponPaintjob;
}) {
  return (
    <div
      style={{
        position: 'relative',
        height: 100,
        width: 100,
        margin: 'auto',
      }}
    >
      <div
        style={{
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          top: '50%',
          left: '50%',
        }}
      >
        <Image
          alt={props.weaponPaintjob.name}
          src={props.weaponPaintjob.icon}
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}
