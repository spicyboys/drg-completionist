import SettingsOutlined from "@ant-design/icons/SettingOutlined";
import { Tabs, Button } from "antd";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TABS, DEFAULT_TAB } from "App";
import SettingsModal from "./SettingsModal";

const { TabPane } = Tabs;

export default function PageTabs() {
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
