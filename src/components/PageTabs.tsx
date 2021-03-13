import { RobotOutlined, SettingOutlined } from '@ant-design/icons/';
import { Button, Col, Divider, Grid, Row, Select, Tabs } from 'antd';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { DEFAULT_TAB, TABS } from 'App';
import AnalyzeModal from './analyzeModal/AnalyzeModal';
import SettingsModal from './settingsModal/SettingsModal';
import './PageTabs.css';

const { useBreakpoint } = Grid;
const { TabPane } = Tabs;
const { Option } = Select;

export default function PageTabs() {
  const history = useHistory();
  const location = useLocation();
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);

  const smallModalBar = (
    <Row justify="space-around">
      <Divider dashed style={{ margin: '12px 0' }} />
      <Col xs={12} sm={6}>
        <Button
          type="text"
          icon={<RobotOutlined />}
          size="large"
          onClick={() => setUploadVisible(!uploadVisible)}
        >
          Analyze
        </Button>
      </Col>
      <Col xs={12} sm={6}>
        <Button
          type="text"
          icon={<SettingOutlined />}
          size="large"
          onClick={() => setSettingsVisible(!settingsVisible)}
        >
          Settings
        </Button>
      </Col>
      <Divider dashed style={{ margin: '12px 0' }} />
    </Row>
  );

  const smallTabsDropdown = (
    <Select
      defaultValue={DEFAULT_TAB}
      onChange={history.push}
      style={{ marginBottom: 12, width: '100%' }}
    >
      {TABS.map((tab) => (
        <Option value={tab.key} key={tab.key}>
          {tab.title}
        </Option>
      ))}
    </Select>
  );

  const tabsBar = (
    <Tabs
      activeKey={location.pathname.substring(1) || DEFAULT_TAB}
      onChange={history.push}
      tabBarExtraContent={{
        right: (
          <Col xs={0} sm={24}>
            <Button
              type="text"
              icon={<RobotOutlined />}
              size="large"
              onClick={() => setUploadVisible(!uploadVisible)}
            >
              Analyze
            </Button>
            <Button
              type="text"
              icon={<SettingOutlined />}
              size="large"
              onClick={() => setSettingsVisible(!settingsVisible)}
            >
              Settings
            </Button>
          </Col>
        ),
      }}
    >
      {TABS.map((tab) => (
        <TabPane tab={tab.title} key={tab.key} />
      ))}
    </Tabs>
  );

  return (
    <>
      <AnalyzeModal
        isVisible={uploadVisible}
        hide={() => setUploadVisible(false)}
      />
      <SettingsModal
        isVisible={settingsVisible}
        hide={() => setSettingsVisible(false)}
      />
      {useBreakpoint()['md'] ? undefined : smallModalBar}
      {useBreakpoint()['md'] ? tabsBar : smallTabsDropdown}
    </>
  );
}
