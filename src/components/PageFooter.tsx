import { Layout, Progress } from 'antd';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_TAB, TABS, TabName } from 'App';
import useStore from 'data/useStore';
import { Frameworks } from 'pages/frameworks/FrameworkData';
import { overclocks } from 'pages/overclocks/OverclockData';
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
          (Array.from(store.overclocks.values()).reduce(
            (p, c) => p + c.size,
            0
          ) /
            Object.values(overclocks)
              .flatMap((w) => Object.values(w))
              .flat().length) *
            100
        );
      case 'frameworks':
        return Math.round(
          (Array.from(store.frameworks.values()).reduce(
            (p, c) => p + c.size,
            0
          ) /
            (Frameworks.length *
              Object.values(MinerWeapons).reduce((p, c) => p + c.length, 0))) *
            100
        );
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
