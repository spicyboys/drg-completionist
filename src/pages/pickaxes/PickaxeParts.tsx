import { Card, Collapse, CollapsePanelProps, Row } from 'antd';
import { PickaxeIcon } from 'assets/other/';
import Image from 'components/Image';
import ProgressCardProgressBar from 'components/progressCard/ProgressCardProgressBar';
import { Pickaxe, UniqueParts } from 'data/pickaxes';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import { ProgressQuery } from 'types/progress';
import PickaxeCard from './PickaxeCard';
import UniquePartCard from './UniquePartCard';

const { Panel } = Collapse;
const { Meta } = Card;

export default function PickaxeParts(
  props: {
    getProgress: ProgressQuery;
    pickaxes: Pickaxe[];
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, pickaxes, ...panelProps } = props;

  const db = useDB();
  const { obtained, total } = useSuspendedLiveQuery(() => getProgress(db), []);
  const progressPercentage = Math.floor((obtained / total || 0) * 100);

  return (
    <Panel
      {...panelProps}
      key={0}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title="Pickaxe Parts"
          avatar={
            <Image
              alt="Pickaxe Parts Progress"
              src={PickaxeIcon}
              style={{ height: 64, width: 64 }}
            />
          }
          description={
            <ProgressCardProgressBar
              initialStrokeColor="#dc8c13"
              percentage={progressPercentage}
              obtained={obtained}
              total={total}
            />
          }
        />
      }
    >
      <Row gutter={[16, 16]}>
        {pickaxes.map((pickaxe) => (
          <PickaxeCard key={pickaxe.name} pickaxe={pickaxe} />
        ))}
        {UniqueParts.map((uniquePart) => (
          <UniquePartCard key={uniquePart.name} uniquePart={uniquePart} />
        ))}
      </Row>
    </Panel>
  );
}
