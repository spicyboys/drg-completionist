import { Card, Divider, Popover, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { isMobile } from 'react-device-detect';
import Image from 'components/Image';
import { CommonVictoryPose, VictoryPose } from 'data/victoryPoses';

const { Paragraph, Text, Title } = Typography;

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
        <Popover
          trigger={isMobile ? 'click' : 'hover'}
          destroyTooltipOnHide
          placement='bottom'
          content={() => (
              <Image
                alt={props.victoryPose.name}
                src={props.victoryPose.icon}
                style={{ height: 380, width: 300 }}
              />
          )}
        >
          <Image
            alt={props.victoryPose.name}
            src={props.victoryPose.icon}
            style={{ height: 100, width: 77 }}
          />
        </Popover>
      </div>
    </div>
  );
}
