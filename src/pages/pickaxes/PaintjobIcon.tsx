import Image from 'components/Image';
import {
  PickaxePaintjobNames,
  PickaxePaintjobIcons as PaintjobIconMap,
} from 'data/pickaxes';

export default function PaintjobIcon(props: {
  paintjob: typeof PickaxePaintjobNames[number];
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
          alt={props.paintjob}
          src={PaintjobIconMap[props.paintjob]}
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}
