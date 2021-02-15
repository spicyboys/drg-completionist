import { Row, Col, PageHeader, Tabs, Layout, Button, BackTop } from "antd";
import "antd/dist/antd.dark.css";
import { useHistory, useLocation, Switch, Route } from "react-router-dom";
import OverclocksPage from "pages/overclocks/OverclocksPage";
import FrameworksPage from "pages/frameworks/FrameworksPage";
import SettingsOutlined from "@ant-design/icons/SettingOutlined";
import SettingsModal from "components/SettingsModal";
import { useState } from "react";

const { Content, Footer } = Layout;
const { TabPane } = Tabs;

type TabName =
  | "overclocks"
  | "frameworks"
  | "skins"
  | "accessories"
  | "pickaxe";

const DEFAULT_TAB: TabName = "overclocks";

const TABS: Array<{ title: string; key: TabName; content: JSX.Element }> = [
  {
    title: "Overclocks",
    key: "overclocks",
    content: <OverclocksPage />,
  },
  {
    title: "Weapon Frameworks",
    key: "frameworks",
    content: <FrameworksPage />,
  },
  {
    title: "Weapon Skins",
    key: "skins",
    content: <></>,
  },
  {
    title: "Miner Accessories",
    key: "accessories",
    content: <></>,
  },
  {
    title: "Pickaxe Components",
    key: "pickaxe",
    content: <></>,
  },
];

function AppTabs() {
  const history = useHistory();
  const location = useLocation();
  const [settingsVisible, setSettingsVisible] = useState(false);
  return (
    <>
      <SettingsModal
        isVisible={settingsVisible}
        hide={() => setSettingsVisible(false)}
      />
      <Tabs
        activeKey={location.pathname.substring(1) || DEFAULT_TAB}
        onChange={history.push}
        tabBarExtraContent={{
          right: (
            <Button
              type="text"
              icon={<SettingsOutlined />}
              size="large"
              onClick={() => setSettingsVisible(!settingsVisible)}
            >
              Settings
            </Button>
          ),
        }}
      >
        {TABS.map((tab) => (
          <TabPane tab={tab.title} key={tab.key} />
        ))}
      </Tabs>
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <BackTop />
      <Content>
        <Row>
          <Col span={18} offset={3}>
            <PageHeader
              title="DRG Completionist"
              subTitle="Rock and Stone!"
              footer={<AppTabs />}
            />
          </Col>
          <Col span={18} offset={3}>
            <Switch>
              {TABS.map((tab) => (
                <Route
                  exact
                  path={
                    [
                      `/${tab.key}`,
                      tab.key === DEFAULT_TAB ? "/" : undefined,
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
      <Footer style={{ textAlign: "center" }}>Made with &#x2665; in ATX</Footer>
    </Layout>
  );
}
