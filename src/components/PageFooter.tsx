import { Layout, Progress } from 'antd';
import { DEFAULT_TAB, TABS, TabName } from 'App';
import useStore from 'data/useStore';
import { Frameworks } from 'pages/frameworks/FrameworkData';
import { overclocks } from 'pages/overclocks/OverclockData';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { MinerWeapons } from 'utils/weapons';

const { Footer } = Layout;

export default function PageFooter() {
  const [store] = useStore();
  const location = useLocation();
  const currentTab = useMemo(
    () => (location.pathname.substring(1) || DEFAULT_TAB) as TabName,
    [location.pathname]
  );
  const currentTabPercentage = useMemo(() => {
    switch (currentTab) {
      case 'overclocks':
        return Math.round(
          (Object.values(store.overclocks).flat().length /
            Object.values(overclocks)
              .flatMap((w) => Object.values(w))
              .flat().length) *
            100
        );
      case 'frameworks':
        return Math.round(
          (Object.values(store.frameworks)
            .flatMap((f) => Object.values(f))
            .reduce((p, c) => p + c.length, 0) /
            (Frameworks.length *
              Object.values(MinerWeapons).reduce((p, c) => p + c.length, 0))) *
            100
        );
      case 'skins':
      case 'accessories':
      case 'pickaxe':
        return null;
    }
  }, [currentTab, store]);
  const currentTabDisplayName = useMemo(
    () => TABS.find((t) => t.key === currentTab)?.title,
    [currentTab]
  );
  return (
    <Footer
      style={{
        position: 'fixed',
        width: '100%',
        bottom:
          currentTabPercentage === null || currentTabPercentage === 0
            ? -100
            : 0,
        backgroundColor: '#141414',
        borderTop: '1px solid #434343',
        transition: 'all .4s',
      }}
    >
      <div>
        {currentTabDisplayName} Progress
        <Progress
          percent={currentTabPercentage === null ? 0 : currentTabPercentage}
        />
      </div>
    </Footer>
  );
}
