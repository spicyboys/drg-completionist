import React, { useMemo } from "react";
import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
  RobotOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Button } from "antd";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <PageContainer
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        {<ProCard>{children}</ProCard>}
      </PageContainer>
    </ProLayout>
  );
}
