import { Card, Col, Progress, Tooltip } from 'antd';
import React, { useMemo } from 'react';
import { type ProgressFooterProps } from '../ProgressFooter';
import { Link } from 'gatsby';
import { LinkOutlined } from '@ant-design/icons';

const OverviewProgressCard = ({
  title,
  progress,
  href,
}: {
  title: string;
  progress: ProgressFooterProps | undefined;
  href: string;
}) => {
  const progressCircle = useMemo(
    () => (
      <Progress
        type="circle"
        status={
          progress?.completedItems === progress?.totalItems
            ? 'success'
            : 'active'
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
      <Card
        title={title}
        actions={[
          <Link to={href} key="link">
            <LinkOutlined />
          </Link>,
        ]}
        style={{ width: 200, textAlign: 'center' }}
      >
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
