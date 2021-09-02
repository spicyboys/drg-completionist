import { CollapsePanelProps } from 'antd';
import { useEffect } from 'react';
import Image from 'components/Image';
import { AppDatabase } from 'db/AppDatabase';
import useDB from 'db/useDB';
import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';
import { Miner, MinerAvatar, MinerColor } from 'utils/miner';
import ProgressCard from './ProgressCard';

export type ProgressQuery = (db: AppDatabase, miner: Miner) => Promise<number>;

export default function MinerCard(
  props: {
    children: (miner: Miner) => React.ReactNode;
    category: string;
    miner: Miner;
    getProgress: ProgressQuery;
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { category, children, miner, getProgress, ...panelProps } = props;

  const db = useDB();
  const progress = useSuspendedLiveQuery(() => getProgress(db, miner), [miner]);
  const progressPercentage = Math.round((progress || 0) * 100);

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
        initialStrokeColor: MinerColor[miner],
      }}
    >
      {children(miner)}
    </ProgressCard>
  );
}
