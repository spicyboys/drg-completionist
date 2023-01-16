import Image from 'components/Image';
import { Framework } from 'data/frameworks';

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
          alt={props.framework.name}
          src={props.framework.icon}
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}
