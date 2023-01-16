import { Badge, Card, Col, Row, Tooltip } from 'antd';
import { useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import { ForgeHammer } from 'assets/other';
import Image from 'components/Image';
import { Miner, MinerColor, MinerColorContrastText } from 'data/miner';
import { VictoryPose } from 'data/victoryPoses';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import ItemOrigin from 'pages/ItemOrigin';
import VictoryPoseIcon from './VictoryPoseIcon';
import './VictoryPoseCard.css';

export default function MatrixVictoryPoseCard(props: {
  miner: Miner;
  victoryPose: VictoryPose;
}) {
  const db = useDB();
  const query = useSuspendedLiveQuery(
    () =>
      db.matrixVictoryPoses.get({
        miner: props.miner,
        name: props.victoryPose.name,
      }),
    [props.miner, props.victoryPose.name]
  );

  const onClick = useCallback(() => {
    if (query === undefined) {
      db.matrixVictoryPoses.add({
        miner: props.miner,
        name: props.victoryPose.name,
        isForged: false,
      });
    } else if (query.isForged) {
      db.matrixVictoryPoses
        .where({
          miner: props.miner,
          name: props.victoryPose.name,
        })
        .delete();
    } else {
      db.matrixVictoryPoses
        .where({
          miner: props.miner,
          name: props.victoryPose.name,
        })
        .modify({ isForged: true });
    }
  }, [db.matrixVictoryPoses, props.miner, props.victoryPose.name, query]);

  return (
    <Col
      xxl={4}
      xl={4}
      lg={8}
      md={8}
      sm={8}
      xs={12}
      key={props.miner + props.victoryPose.name}
    >
      <Badge.Ribbon
        className="victory-pose-ribbon"
        text={props.victoryPose.name}
      >
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: query?.isForged
              ? MinerColor[props.miner]
              : 'inherit',
            color: query?.isForged
              ? MinerColorContrastText[props.miner]
              : '#cccccc',
            outline:
              query && !query.isForged
                ? `3px solid ${MinerColor[props.miner]}`
                : undefined,
            transition: 'all 0.3s ease',
          }}
        >
          <VictoryPoseIcon victoryPose={props.victoryPose} />
          <Row justify="space-between">
            <Col>
              <Tooltip
                title={query && !query?.isForged ? 'Unforged' : undefined}
                trigger={isMobile ? 'click' : 'hover'}
                destroyTooltipOnHide
              >
                <Image
                  alt={`${props.victoryPose.name} is acquired, but unforged`}
                  src={ForgeHammer}
                  style={{
                    float: 'left',
                    height: isMobile ? 30 : 20,
                    marginTop: isMobile ? -30 : -20,
                    opacity: query && !query?.isForged ? 1 : 0,
                    width: 'auto',
                  }}
                />
              </Tooltip>
            </Col>
            <Col>
              <ItemOrigin item={props.victoryPose} />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
}
