import Image from 'components/Image';
import { ArmorPaintjob } from 'data/armor';

export default function ArmorPaintjobIcon(props: { paintjob: ArmorPaintjob }) {
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
          alt={props.paintjob.name}
          src={props.paintjob.icon}
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}
