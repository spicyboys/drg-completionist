import { Col, BackTop, Layout, Row, Spin } from 'antd';
import 'antd/dist/antd.dark.css';
import React, { lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BoscoPhotos from 'assets/bosco';
import * as OtherIcons from 'assets/other/';
import * as OverclockFrame from 'assets/overclocks/frames';
import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';

const { Content } = Layout;

export type TabName =
  | 'overclocks'
  | 'frameworks'
  | 'armor'
  | 'weaponPaintjobs'
  | 'pickaxes'
  | 'victoryPoses'
  | 'cosmetics'
  | 'bosco'
  | 'matrixCore'
  | 'cargoCrate'
  | 'lostPack';

export const DEFAULT_TAB: TabName = 'overclocks';

const CATEGORY_TABS: Array<{
  title: string;
  key: TabName;
  icon: ImgSrc;
  content: React.ComponentType;
}> = [
  {
    title: 'Overclocks',
    key: 'overclocks',
    icon: OverclockFrame.Clean,
    content: lazy(() => import('pages/overclocks/OverclocksPage')),
  },
  {
    title: 'Frameworks',
    key: 'frameworks',
    icon: OtherIcons.ForgeHammer,
    content: lazy(() => import('pages/frameworks/FrameworksPage')),
  },
  {
    title: 'Armor',
    key: 'armor',
    icon: OtherIcons.Armor,
    content: lazy(() => import('pages/armor/ArmorPage')),
  },
  {
    title: 'Weapons',
    key: 'weaponPaintjobs',
    icon: OtherIcons.PaintPickaxeIcon,
    content: lazy(() => import('pages/weaponPaintjobs/WeaponPaintjobsPage')),
  },
  {
    title: 'Pickaxes',
    key: 'pickaxes',
    icon: OtherIcons.PickaxeIcon,
    content: lazy(() => import('pages/pickaxes/PickaxesPage')),
  },
  {
    title: 'Victory Poses',
    key: 'victoryPoses',
    icon: OtherIcons.RockAndStone,
    content: lazy(() => import('pages/victoryPoses/VictoryPosesPage')),
  },
  {
    title: 'Cosmetics',
    key: 'cosmetics',
    icon: OtherIcons.AccessoryIcon,
    content: lazy(() => import('pages/cosmetics/CosmeticsPage')),
  },
  {
    title: 'Bosco',
    key: 'bosco',
    icon: BoscoPhotos.Bosco,
    content: lazy(() => import('pages/bosco/BoscoPage')),
  },
];

const ORIGIN_TABS: Array<{
  title: string;
  key: TabName;
  icon: ImgSrc;
  content: React.ComponentType;
}> = [
  {
    title: 'Matrix Core',
    key: 'matrixCore',
    icon: OtherIcons.MatrixCore,
    content: lazy(() => import('pages/origin/MatrixCorePage')),
  },
  {
    title: 'Cargo Crate',
    key: 'cargoCrate',
    icon: OtherIcons.CargoCrateMed,
    content: lazy(() => import('pages/origin/CargoCratePage')),
  },
  {
    title: 'Lost Pack',
    key: 'lostPack',
    icon: OtherIcons.LostPack,
    content: lazy(() => import('pages/origin/LostPackPage')),
  },
];

export const TABS = [...CATEGORY_TABS, ...ORIGIN_TABS];

const PageSpinner = memo(function PageSpinner() {
  return (
    <div
      style={{
        lineHeight: '50vh',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Spin />
    </div>
  );
});

export default function App() {
  return (
    <Layout style={{ backgroundColor: '#1a1a1a' }}>
      <BackTop style={{ bottom: 110 }} />
      <Content style={{ marginBottom: 100 }}>
        <Row justify="center">
          <Col xs={22} lg={18}>
            <PageHeader />
          </Col>
          <Col xs={22} lg={18}>
            <Switch>
              {TABS.map((tab) => (
                <Route
                  exact
                  path={
                    [
                      `/${tab.key}`,
                      tab.key === DEFAULT_TAB ? '/' : undefined,
                    ].filter((x) => x !== undefined) as string[]
                  }
                  key={tab.key}
                >
                  <React.Suspense fallback={<PageSpinner />}>
                    <tab.content />
                  </React.Suspense>
                </Route>
              ))}
            </Switch>
          </Col>
        </Row>
      </Content>
      <PageFooter />
    </Layout>
  );
}
