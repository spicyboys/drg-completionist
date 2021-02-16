import { Framework, FrameworkIcon as FrameworkIconMap } from './FrameworkData';

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
        <img
          width="100"
          height="100"
          src={FrameworkIconMap[props.framework]}
          alt={props.framework}
        />
      </div>
    </div>
  );
}
