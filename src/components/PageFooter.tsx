import { Layout, Tooltip } from 'antd';
import { useMemo } from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import { DEFAULT_TAB, TABS, TabName } from 'App';
import { MinerColor } from 'utils/miner';
import './PageFooter.css';
import useCurrentTabProgress from './useCurrentTabProgress';

const { Footer } = Layout;
const FOOTER_HEIGHT = 50;

const backgroundColor = `linear-gradient(to right, ${Object.values(MinerColor)
  .map((color, index, arr) => `${color} ${index * (100 / (arr.length - 1))}%`)
  .join(', ')})`;

const animationColor = `linear-gradient(270deg, ${Object.values(MinerColor)
  .map((color) => `${color}`)
  .join(', ')}`;

export default function PageFooter() {
  const location = useLocation();
  const [currentTab, currentTabDisplayName] = useMemo(() => {
    const tab = (location.pathname.substring(1) || DEFAULT_TAB) as TabName;
    const tabName = TABS.find((t) => t.key === tab)?.title;
    return [tab, tabName];
  }, [location.pathname]);

  const { progress, partialProgress } = useCurrentTabProgress(currentTab);

  const isFooterHidden = useMemo(
    () => progress === 0 && (partialProgress === null || partialProgress === 0),
    [partialProgress, progress]
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
        className={progress === 100 ? 'completeAnimation' : undefined}
        style={{
          background: progress === 100 ? animationColor : backgroundColor,
          backgroundSize: progress === 100 ? '800% 800%' : 'initial',
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
            width: `${100 - progress}%`,
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
              partialProgress === null
                ? `${100 - progress}%`
                : `${100 - progress - partialProgress}%`,
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
            destroyTooltipOnHide
            title={
              partialProgress
                ? `Forged + Unforged: ${progress + partialProgress}%`
                : undefined
            }
            trigger={isMobile ? 'click' : 'hover'}
          >
            {currentTabDisplayName} Progress: {progress}%
          </Tooltip>
        </div>
      </div>
    </Footer>
  );
}
