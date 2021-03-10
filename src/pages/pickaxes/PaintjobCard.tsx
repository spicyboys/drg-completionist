import { Card, Col, Tooltip } from 'antd';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { PickaxePaintjobNames } from 'data/pickaxes';
import PaintjobIcon from './PaintjobIcon';
// import useDB from 'db/useDB';
// import useSuspendedLiveQuery from 'db/useSuspendedLiveQuery';

const accentColor = '#fea817';

export default function PaintjobCard(props: {
  paintjob: typeof PickaxePaintjobNames[number];
}) {
  // TODO: Replace this dummy state with IndexedDB stuff
  const [isAcquired, setIsAcquired] = useState(false);
  // const db = useDB();
  // const query = useSuspendedLiveQuery(
  //   () => db.pickaxePaintjobs.get({ paintjob: props.paintjob }),
  //   [props.paintjob]
  // );

  // const onClick = useCallback(() => {
  //   if (query === undefined) {
  //     db.paintjobs.add({ paintjob: props.paintjob });
  //   } else {
  //     db.paintjobs.where({ paintjob: props.paintjob }).delete();
  //   }
  // }, [db.paintjobs, props.paintjob, query]);

  const onClick = () => setIsAcquired(!isAcquired);

  return (
    <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={12}>
      <Tooltip
        destroyTooltipOnHide
        title={props.paintjob}
        trigger={isMobile ? 'click' : 'hover'}
      >
        <Card
          hoverable
          onClick={onClick}
          size="small"
          style={{
            backgroundColor: isAcquired ? accentColor : 'inherit',
            transition: 'all 0.3s ease',
          }}
        >
          <PaintjobIcon paintjob={props.paintjob} />
        </Card>
      </Tooltip>
    </Col>
  );
}
