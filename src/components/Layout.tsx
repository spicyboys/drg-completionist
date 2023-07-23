import React, { createContext, useMemo, useState } from "react";
import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
  RobotOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  PageContainer,
  ProCard,
  ProLayout,
  FooterToolbar,
} from "@ant-design/pro-components";
import { Button } from "antd";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export const FooterContext = createContext<(footer: React.ReactNode) => void>(
  () => {}
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const { allMinersJson: miners } =
    useStaticQuery<Queries.PageLayoutQuery>(graphql`
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
    `);

  const menuItems = useMemo(() => {
    return {
      routes: miners.nodes.map((miner) => {
        return {
          name: miner.name!,
          path: miner.name?.toLowerCase(),
          icon: (
            <GatsbyImage
              image={miner.icon?.childImageSharp?.gatsbyImageData!}
              alt={miner.name!}
            />
          ),
          routes: [
            {
              path: `overclocks`,
              name: "Overclocks",
            },
          ],
        };
      }),
    };
  }, [miners]);

  const [footer, setFooter] = useState<React.ReactNode>(null);

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
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
          <Button icon={<RobotOutlined />} type="text">
            Analyze
          </Button>,
          <Button icon={<SettingOutlined />} type="text">
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
