import * as frames from 'assets/overclocks/frames';
import * as icons from 'assets/overclocks/icons';
import { Overclock } from './OverclockData';

export default function OverclockIcon(props: { overclock: Overclock }) {
  const { type: frameName, icon: iconName } = props.overclock;
  const icon = icons[iconName];
  const frame = frames[frameName];

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
        <img src={frame} alt={frameName} />
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -5${frameName === 'Clean' ? 7 : 0}%)`,
            top: '50%',
            left: '50%',
          }}
        >
          <img src={icon} alt={iconName} />
        </div>
      </div>
    </div>
  );
}
