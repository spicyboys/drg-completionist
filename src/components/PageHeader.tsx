import { Col, PageHeader as AntPageHeader, Typography } from 'antd';
import { memo } from 'react';
import { Assignment } from 'assets/other';
import Image from 'components/Image';
import PageTabs from 'components/PageTabs';

const { Title } = Typography;

export default memo(function PageHeader() {
  return (
    <AntPageHeader
      title="DRG Completionist"
      avatar={{
        size: 'large',
        src: (
          <Image
            src={Assignment}
            alt="Assignment Icon"
            width={40}
            height={40}
          />
        ),
      }}
      extra={
        <Col xs={0} sm={24} style={{ marginTop: 12 }}>
          <Title level={5} type="secondary" style={{ color: '#ffffffa6' }}>
            Leave No Rock or Stone Unturned!
          </Title>
        </Col>
      }
      footer={<PageTabs />}
    />
  );
});
