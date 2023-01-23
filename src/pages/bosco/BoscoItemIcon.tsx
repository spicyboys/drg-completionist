import Image from 'components/Image';
import { BoscoFramework, BoscoPaintjob } from 'data/bosco';

export default function BoscoItemIcon(props: {
  item: BoscoFramework | BoscoPaintjob;
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
          alt={props.item.name}
          src={props.item.icon}
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}
