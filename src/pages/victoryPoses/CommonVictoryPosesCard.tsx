import { Col, Badge, Card, Row } from 'antd';
import { useCallback } from 'react';
import { Miner, MinerColor } from 'data/miner';
import { CommonVictoryPose } from 'data/victoryPoses';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import VictoryPoseIcon from './VictoryPoseIcon';
import './VictoryPoseCard.css';

export default function CommonVictoryPoseCard(props: {
  commonVictoryPose: CommonVictoryPose;
  miner: Miner;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.commonVictoryPoses.get({
        miner: props.miner,
        name: props.commonVictoryPose.name,
      }),
    [props.miner, props.commonVictoryPose.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.commonVictoryPoses.add({
        miner: props.miner,
        name: props.commonVictoryPose.name,
      });
    } else {
      db.commonVictoryPoses
        .where({
          miner: props.miner,
          name: props.commonVictoryPose.name,
        })
        .delete();
    }
  }, [db.commonVictoryPoses, props.miner, props.commonVictoryPose, query]);

  return (
    <Col
      xxl={4}
      xl={4}
      lg={8}
      md={8}
      sm={8}
      xs={12}
      key={props.miner + props.commonVictoryPose.name}
    >
      <Badge.Ribbon
        className="victory-pose-ribbon"
        text={props.commonVictoryPose.name}
      >
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query ? MinerColor[props.miner] : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <VictoryPoseIcon victoryPose={props.commonVictoryPose} />
          <Row>
            <Col flex="auto" />
            <Col>
              <ItemOrigin item={props.commonVictoryPose} />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
