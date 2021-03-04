import { Col, BackTop, Layout, Row, Spin } from 'antd';
import 'antd/dist/antd.dark.css';
import React, { lazy } from 'react';
import PreloadRoutes from 'PreloadRoutes';
import Routes from 'Routes';
import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';
import useDB from 'db/useDB';
import migrateStore from 'store/migrateStore';

const { Content } = Layout;

export type TabName = 'overclocks' | 'frameworks';

export const DEFAULT_TAB: TabName = 'overclocks';

export const TABS: Array<{
  title: string;
  key: TabName;
  content: React.ComponentType;
}> = [
  {
    title: 'Overclocks',
    key: 'overclocks',
    content: lazy(() => import('pages/overclocks/OverclocksPage')),
  },
  {
    title: 'Weapon Frameworks',
    key: 'frameworks',
    content: lazy(() => import('pages/frameworks/FrameworksPage')),
  },
  // https://github.com/BobertForever/drg-completionist/issues/1
  // {
  //   title: "Weapon Skins",
  //   key: "skins",
  //   content: <></>,
  // },
  // https://github.com/BobertForever/drg-completionist/issues/2
  // {
  //   title: "Miner Accessories",
  //   key: "accessories",
  //   content: <></>,
  // },
  // https://github.com/BobertForever/drg-completionist/issues/3
  // {
  //   title: "Pickaxe Components",
  //   key: "pickaxe",
  //   content: <></>,
  // },
];

export default function App() {
  const db = useDB();
  migrateStore(db);

  return (
    <Layout style={{ backgroundColor: '#1a1a1a' }}>
      <BackTop style={{ bottom: 110 }} />
      <Content style={{ marginBottom: 100 }}>
        <Row justify="center">
          <Col xs={22} lg={18}>
            <PageHeader />
          </Col>
          <Col xs={22} lg={18}>
            <React.Suspense
              fallback={
                <div
                  style={{
                    lineHeight: '50vh',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Spin />
                </div>
              }
            >
              <PreloadRoutes />
              <Routes />
            </React.Suspense>
          </Col>
        </Row>
      </Content>
      <PageFooter />
    </Layout>
  );
}
