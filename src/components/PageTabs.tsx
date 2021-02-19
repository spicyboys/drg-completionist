import { RobotOutlined, SettingOutlined } from '@ant-design/icons/';
import { Button, Col, Divider, Grid, Row, Tabs } from 'antd';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { DEFAULT_TAB, TABS } from 'App';
import AnalyzeModal from './analyzeModal/AnalyzeModal';
import SettingsModal from './settingsModal/SettingsModal';

const { useBreakpoint } = Grid;
const { TabPane } = Tabs;

export default function PageTabs() {
  const history = useHistory();
  const location = useLocation();
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);

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
      {useBreakpoint()['xs'] ? (
        <Row justify="space-around">
          <Divider dashed style={{ margin: '12px 0' }} />
          <Col xs={10} sm={0}>
            <Button
              type="text"
              icon={<RobotOutlined />}
              size="large"
              onClick={() => setUploadVisible(!uploadVisible)}
            >
              Analyze
            </Button>
          </Col>
          <Col xs={10} sm={0}>
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
      ) : null}
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
    </>
  );
}
