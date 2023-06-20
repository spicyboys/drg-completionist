import { CollapsePanelProps } from 'antd';
import { useEffect } from 'react';
import Image from 'components/Image';
import { Miner, MinerAvatar, MinerColor } from 'data/miner';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import { MinerProgressQuery } from 'types/progress';
import ProgressCard from './ProgressCard';

export default function MinerCard(
  props: {
    children: (miner: Miner) => React.ReactNode;
    category: string;
    miner: Miner;
    getProgress: MinerProgressQuery;
  } & Omit<CollapsePanelProps, 'key' | 'header' | 'children'>
) {
  const { category, children, miner, getProgress, ...panelProps } = props;

  const db = useDB();
  const { obtained, total } = useSuspendedLiveQuery(
    () => getProgress(db, miner),
    [miner]
  );
  const progressPercentage = Math.floor((obtained / total || 0) * 100);

  useEffect(() => {
    gtag('event', 'progress', {
      event_category: category,
      event_label: miner,
      value: progressPercentage,
    });
  }, [category, miner, progressPercentage]);

  return (
    <ProgressCard
      {...panelProps}
      title={miner}
      key={miner}
      avatar={
        <Image
          alt={miner}
          src={MinerAvatar[miner]}
          style={{ height: 64, width: 64 }}
        />
      }
      progress={{
        percentage: progressPercentage,
        obtained: obtained,
        total: total,
        initialStrokeColor: MinerColor[miner],
      }}
    >
      {children(miner)}
    </ProgressCard>
  );
}
