import React, { createContext, useMemo, useState } from "react";
import {
  GithubFilled,
  InfoCircleFilled,
  RobotOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  PageContainer,
  ProCard,
  FooterToolbar,
} from "@ant-design/pro-components";
import { Button, Tooltip } from "antd";
import { Link, type PageProps, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import SettingsModal from "./settings/SettingsModal";
import InfoTooltip from "./InfoTooltip";
import AnalyzeModal from "./analyze/AnalyzeModal";
import lodable from "@loadable/component";
import nullthrows from "../utils/nullthrows";

// Ant Design's Pro Layout uses JS break points instead of CSS break points
// causing hydration issues, so we use loadable to only load the component
// on the client. This causes a "white flash" on first page load but it's
// better than the hydration errors and layout issues.
const ProLayout = lodable(() => import("@ant-design/pro-layout"));

export const FooterContext = createContext<(footer: React.ReactNode) => void>(
  () => {}
);

export default function Layout({
  children,
  location,
}: Omit<PageProps, "children"> & { children: React.ReactNode }) {
  const { allMinersJson: miners } = useStaticQuery<Queries.PageLayoutQuery>(
    graphql`
      query PageLayout {
        allMinersJson {
          nodes {
            name
            icon {
              childImageSharp {
                gatsbyImageData(width: 15)
              }
            }
          }
        }
      }
    `
  );

  const menuItems = useMemo(() => {
    return {
      routes: miners.nodes.map((miner) => {
        return {
          name: miner.name,
          path: miner.name.toLowerCase(),
          icon: (
            <GatsbyImage
              image={nullthrows(miner.icon?.childImageSharp?.gatsbyImageData)}
              alt={miner.name}
            />
          ),
          routes: [
            {
              path: "overclocks",
              name: "Overclocks",
            },
            {
              path: "weapon-paint-jobs",
              name: "Weapon Paint Jobs",
            },
            {
              path: "weapon-frameworks",
              name: "Weapon Frameworks",
            },
            {
              path: "armor-paint-jobs",
              name: "Armor Paint Jobs",
            },
          ],
        };
      }),
    };
  }, [miners]);

  const [footer, setFooter] = useState<React.ReactNode>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showAnalyzeModal, setShowAnalyzeModal] = useState(false);

  return (
    <ProLayout
      location={{
        pathname: location.pathname,
      }}
      layout="mix"
      title="DRG Completionist"
      logo={
        <StaticImage
          src="../images/assignment.png"
          alt="Assignment Icon"
          height={35}
        />
      }
      headerTitleRender={(logo, title) => (
        <Link to="/">
          {logo}
          {title}
        </Link>
      )}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          <Tooltip title={<InfoTooltip />} key="info">
            <InfoCircleFilled key="InfoCircleFilled" />
          </Tooltip>,

          <a
            href="https://github.com/spicyboys/drg-completionist"
            style={{ textDecoration: "inherit", color: "inherit" }}
            target="_blank"
            rel="noreferrer"
            key="github"
          >
            <GithubFilled style={{ display: "block" }} />
          </a>,

          <Button
            icon={<RobotOutlined />}
            type="text"
            size="small"
            onClick={() => setShowAnalyzeModal(true)}
            key="analyze"
          >
            Analyze
          </Button>,

          <Button
            icon={<SettingOutlined />}
            type="text"
            size="small"
            onClick={() => setShowSettings(true)}
            key="settings"
          >
            Settings
          </Button>,
        ];
      }}
      route={menuItems}
      menuItemRender={(item, dom) =>
        item.path ? <Link to={item.path}>{dom}</Link> : dom
      }
    >
      <PageContainer breadcrumbRender={false}>
        <ProCard>
          <FooterContext.Provider value={setFooter}>
            {children}
          </FooterContext.Provider>
        </ProCard>

        <SettingsModal
          open={showSettings}
          hide={() => setShowSettings(false)}
        />

        <AnalyzeModal
          open={showAnalyzeModal}
          hide={() => setShowAnalyzeModal(false)}
        />

        {footer && (
          <FooterToolbar
            // The footer renders in a portal and therefore doesn't have a
            // parent in the DOM with the ant-layout class. This causes the
            // global font to not be applied. We can fix this by setting the
            // prefixCls to ant-layout which matches the font CSS selector.
            prefixCls="ant-layout"
            style={{ paddingInline: 0 }}
            // We don't want the default child renderer since it doesn't render
            // the footer with the full width.
            renderContent={() => footer}
          />
        )}
      </PageContainer>
    </ProLayout>
  );
}
