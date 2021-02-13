import { Row, Col, PageHeader, Tabs } from "antd";
import "antd/dist/antd.dark.css";
import { useHistory, useLocation, Switch, Route } from "react-router-dom";
import Overclocks from "pages/overclocks/Overclocks";

const { TabPane } = Tabs;

type TabName = "overclocks" | "frameworks" | "skins" | "accessories" | "pickax";

const DEFAULT_TAB: TabName = "overclocks";

const TABS: Array<{ title: string; key: TabName; content: JSX.Element }> = [
  {
    title: "Overclocks",
    key: "overclocks",
    content: <Overclocks />,
  },
  {
    title: "Weapon frameworks",
    key: "frameworks",
    content: <></>,
  },
  {
    title: "Weapon skins",
    key: "skins",
    content: <></>,
  },
  {
    title: "Miner Accessories",
    key: "accessories",
    content: <></>,
  },
  {
    title: "Pickax Components",
    key: "pickax",
    content: <></>,
  },
];

export default function App() {
  const history = useHistory();
  const location = useLocation();
  return (
    <Row gutter={16}>
      <Col span={18} offset={3}>
        <PageHeader
          title="DRG Completionist"
          subTitle="Rock and Stone!"
          footer={
            <Tabs
              activeKey={location.pathname.substring(1) || DEFAULT_TAB}
              onChange={history.push}
            >
              {TABS.map((tab) => (
                <TabPane tab={tab.title} key={tab.key} />
              ))}
            </Tabs>
          }
        />
      </Col>
      <Col span={18} offset={3}>
        <Switch>
          {TABS.map((tab) => (
            <Route exact path={`/${tab.key}`} key={tab.key}>
              {tab.content}
            </Route>
          ))}
        </Switch>
      </Col>
    </Row>
  );
}
