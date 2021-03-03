import Image from 'components/Image';
import { Framework, FrameworkIcon as FrameworkIconMap } from 'data/frameworks';

export default function FrameworkIcon(props: { framework: Framework }) {
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
          alt={props.framework}
          src={FrameworkIconMap[props.framework]}
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}
