import { Card, Col, Progress, Tooltip } from "antd";
import React, { useMemo } from "react";
import { type ProgressFooterProps } from "../ProgressFooter";

const OverviewProgressCard = ({
  title,
  progress,
}: {
  title: string;
  progress: ProgressFooterProps | undefined;
}) => {
  const progressCircle = useMemo(
    () => (
      <Progress
        type="circle"
        status={
          progress?.completedItems === progress?.totalItems
            ? "success"
            : "active"
        }
        percent={
          progress === undefined
            ? undefined
            : (((progress.unforgedItems ?? 0) + progress.completedItems) /
                progress.totalItems) *
              100
        }
        success={{
          percent:
            progress === undefined
              ? undefined
              : (progress.completedItems / progress.totalItems) * 100,
        }}
        format={() => `${progress?.completedItems} / ${progress?.totalItems}`}
      />
    ),
    [progress],
  );

  return (
    <Col>
      <Card title={title}>
        {progress?.unforgedItems !== undefined && progress.unforgedItems > 0 ? (
          <Tooltip
            title={`Forged: ${progress.completedItems} | Unforged: ${progress.unforgedItems}`}
            overlayStyle={{ maxWidth: 600 }}
          >
            {progressCircle}
          </Tooltip>
        ) : (
          progressCircle
        )}
      </Card>
    </Col>
  );
};

export default OverviewProgressCard;
