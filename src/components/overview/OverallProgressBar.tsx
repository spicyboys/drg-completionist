import { Progress, Tooltip } from 'antd';
import React, { useMemo } from 'react';
import { type ProgressFooterProps } from '../ProgressFooter';

function allNotUndefined<T>(arr: readonly (T | undefined)[]): arr is T[] {
  return arr.every((a) => a !== undefined);
}

const OverallProgressBar = ({
  progresses,
  color,
}: {
  progresses: (ProgressFooterProps | undefined)[];
  color: string;
}) => {
  const overall = useMemo(() => {
    if (!allNotUndefined(progresses)) {
      return undefined;
    }

    return {
      totalItems: progresses.reduce((p, c) => p + c.totalItems, 0),
      completedItems: progresses.reduce((p, c) => p + c.completedItems, 0),
      unforgedItems: progresses.reduce((p, c) => p + (c.unforgedItems ?? 0), 0),
    };
  }, [progresses]);

  return (
    <Tooltip
      title={`Forged: ${overall?.completedItems ?? 0} ${
        overall?.unforgedItems !== undefined && overall.unforgedItems > 0
          ? `| Unforged: ${overall.unforgedItems} `
          : ''
      }| Total: ${overall?.totalItems ?? 0}`}
      overlayStyle={{ maxWidth: 600 }}
    >
      <Progress
        status={
          overall?.completedItems === overall?.totalItems ? 'success' : 'active'
        }
        percent={
          overall === undefined
            ? undefined
            : (((overall.unforgedItems ?? 0) + overall.completedItems) /
                overall.totalItems) *
              100
        }
        success={{
          percent:
            overall === undefined
              ? undefined
              : (overall.completedItems / overall.totalItems) * 100,
          strokeColor: color,
        }}
        format={(_, p) => `${p?.toFixed(1)}%`}
      />
    </Tooltip>
  );
};

export default OverallProgressBar;
