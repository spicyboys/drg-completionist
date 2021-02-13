import { Row, Col, PageHeader, Tabs } from "antd";
import "antd/dist/antd.dark.css";
import { useHistory, useLocation } from "react-router-dom";

const { TabPane } = Tabs;

export default function App() {
  const history = useHistory();
  const location = useLocation();
  return (
    <Row gutter={[16, 16]}>
      <Col span={18} offset={3} push={3}>
        <PageHeader
          title="DRG Completionist"
          subTitle="Rock and Stone!"
          footer={
            <Tabs
              activeKey={location.pathname.substring(1) || "overclocks"}
              onChange={history.push}
            >
              <TabPane tab="Overclocks" key="overclocks" />
              <TabPane tab="Weapon frameworks" key="frameworks" />
              <TabPane tab="Weapon skins" key="skins" />
              <TabPane tab="Miner Accessories" key="accessories" />
              <TabPane tab="Pickax Components" key="pickax" />
            </Tabs>
          }
        />
      </Col>
    </Row>
  );
}
