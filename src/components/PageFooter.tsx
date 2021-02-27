import { Layout, Tooltip } from 'antd';
import { useMemo } from 'react';
import { isMobile } from 'react-device-detect';
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

  const currentUnforgedPercentage = useMemo(() => {
    return Math.round(
      (Array.from(store.unforgedOverclocks.values()).reduce(
        (p, c) => p + c.size,
        0
      ) /
        Object.values(Overclocks)
          .flatMap((w) => Object.values(w))
          .flat().length) *
        100
    );
  }, [store.unforgedOverclocks]);

  const isFooterHidden = useMemo(() => {
    switch (currentTab) {
      case 'overclocks':
        return currentTabPercentage === 0 && currentUnforgedPercentage === 0;
      case 'frameworks':
        return currentTabPercentage === 0;
      default:
        return true;
    }
  }, [currentTab, currentTabPercentage, currentUnforgedPercentage]);

  const currentTabDisplayName = useMemo(
    () => TABS.find((t) => t.key === currentTab)?.title,
    [currentTab]
  );

  return (
    <Footer
      style={{
        backgroundColor: '#141414',
        borderTop: '1px solid #434343',
        bottom: isFooterHidden ? -FOOTER_HEIGHT : 0,
        padding: 0,
        position: 'fixed',
        transition: 'all .4s',
        width: '100%',
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
          height: FOOTER_HEIGHT,
          width: '100%',
          zIndex: 4,
        }}
      >
        {/* Unforged Section */}
        <div
          style={{
            background: `
              repeating-linear-gradient(
                -55deg,
                #333333,
                #333333 10px,
                #444444 10px,
                #444444 20px
              )`,
            float: 'right',
            height: '100%',
            position: 'absolute',
            right: 0,
            transition: 'all 0.3s',
            width: `${100 - currentTabPercentage}%`,
            zIndex: 1,
          }}
        ></div>
        {/* Unfilled Section */}
        <div
          style={{
            backgroundColor: '#141414',
            height: '100%',
            position: 'absolute',
            right: 0,
            transition: 'all 0.3s',
            width:
              currentTab === 'overclocks'
                ? `${100 - currentTabPercentage - currentUnforgedPercentage}%`
                : `${100 - currentTabPercentage}%`,
            zIndex: 2,
          }}
        ></div>
        {/* Completed Section */}
        <div
          style={{
            color: '#FFFFFFCC',
            fontWeight: 'bold',
            height: FOOTER_HEIGHT,
            lineHeight: `${FOOTER_HEIGHT}px`,
            position: 'absolute',
            textAlign: 'center',
            textShadow: '2px 2px 5px black',
            width: '100%',
            zIndex: 3,
          }}
        >
          <Tooltip
            title={
              currentTab === 'overclocks'
                ? `Forged + Unforged: ${
                    currentTabPercentage + currentUnforgedPercentage
                  }%`
                : undefined
            }
            trigger={isMobile ? 'click' : 'hover'}
          >
            {currentTabDisplayName} Progress: {currentTabPercentage}%
          </Tooltip>
        </div>
      </div>
    </Footer>
  );
}
