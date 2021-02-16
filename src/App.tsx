import 'antd/dist/antd.dark.css';

import { BackTop, Col, Layout, PageHeader, Row } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { Assignment } from 'assets/other';
import PageFooter from 'components/PageFooter';
import PageTabs from 'components/PageTabs';
import FrameworksPage from 'pages/frameworks/FrameworksPage';
import OverclocksPage from 'pages/overclocks/OverclocksPage';

const { Content } = Layout;

export type TabName =
  | 'overclocks'
  | 'frameworks'
  | 'skins'
  | 'accessories'
  | 'pickaxe';

export const DEFAULT_TAB: TabName = 'overclocks';

export const TABS: Array<{
  title: string;
  key: TabName;
  content: JSX.Element;
}> = [
  {
    title: 'Overclocks',
    key: 'overclocks',
    content: <OverclocksPage />,
  },
  {
    title: 'Weapon Frameworks',
    key: 'frameworks',
    content: <FrameworksPage />,
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
  return (
    <Layout>
      <BackTop style={{ bottom: 150 }} />
      <Content style={{ marginBottom: 100 }}>
        <Row justify="center">
          <Col xs={22} lg={18}>
            <PageHeader
              avatar={{ size: 'large', src: Assignment }}
              title="DRG Completionist"
              subTitle="Leave No Rock or Stone Unturned!"
              footer={<PageTabs />}
            />
          </Col>
          <Col xs={22} lg={18}>
            <Switch>
              {TABS.map((tab) => (
                <Route
                  exact
                  path={
                    [
                      `/${tab.key}`,
                      tab.key === DEFAULT_TAB ? '/' : undefined,
                    ].filter((x) => x !== undefined) as string[]
                  }
                  key={tab.key}
                >
                  {tab.content}
                </Route>
              ))}
            </Switch>
          </Col>
        </Row>
      </Content>
      <PageFooter />
    </Layout>
  );
}
