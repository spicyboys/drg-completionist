import { Layout } from 'antd';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_TAB, TABS, TabName } from 'App';
import { Frameworks } from 'data/frameworks';
import { Overclocks } from 'data/overclocks';
import useStore from 'store/useStore';
import { MinerColor } from 'utils/miner';
import { MinerWeapons } from 'utils/weapons';
import './PageFooter.css';

const { Footer } = Layout;
const FOOTER_HEIGHT = 50;

const backgroundColor = `linear-gradient(to right, ${Object.values(MinerColor)
  .map((color, index, arr) => `${color} ${index * (100 / (arr.length - 1))}%`)
  .join(', ')})`;

const animationColor = `linear-gradient(270deg, ${Object.values(MinerColor)
  .map((color) => `${color}`)
  .join(', ')}`;

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
            Object.values(Overclocks)
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
            ? -FOOTER_HEIGHT
            : 0,
        backgroundColor: '#141414',
        borderTop: '1px solid #434343',
        transition: 'all .4s',
        padding: 0,
      }}
    >
      <div
        className={
          currentTabPercentage === 100 ? 'completeAnimation' : undefined
        }
        style={{
          background:
            currentTabPercentage === 100 ? animationColor : backgroundColor,
          backgroundSize:
            currentTabPercentage === 100 ? '800% 800%' : 'initial',
          width: '100%',
          height: FOOTER_HEIGHT,
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: FOOTER_HEIGHT,
            width: '100%',
            color: '#FFFFFFCC',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px black',
            textAlign: 'center',
            lineHeight: `${FOOTER_HEIGHT}px`,
          }}
        >
          {currentTabDisplayName} Progress: {currentTabPercentage}%
        </div>
        <div
          style={{
            backgroundColor: '#141414',
            width: `${100 - currentTabPercentage}%`,
            height: '100%',
            float: 'right',
            transition: 'all 0.3s',
          }}
        ></div>
      </div>
    </Footer>
  );
}
