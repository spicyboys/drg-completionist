import Image from 'components/Image';
import { CommonVictoryPose, VictoryPose } from 'data/victoryPoses';

export default function VictoryPoseIcon(props: {
  victoryPose: VictoryPose | CommonVictoryPose;
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
          alt={props.victoryPose.name}
          src={props.victoryPose.icon}
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}
