import React, { useMemo, useState } from "react";
import { Layout, Menu } from "antd";
import { DBContext } from "../hooks/db";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../styles/global.css";

const { Header, Sider, Content } = Layout;

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>(
    location.pathname.split("/").filter((p) => p != "")
  );

  const { allMinersJson } = useStaticQuery<Queries.PageLayoutQuery>(graphql`
    query PageLayout {
      allMinersJson {
        nodes {
          name
          icon {
            childImageSharp {
              gatsbyImageData(width: 35)
            }
          }
        }
      }
    }
  `);

  const menuItems = useMemo(() => {
    return allMinersJson.nodes.map((miner) => {
      return {
        key: miner.name!.toLocaleLowerCase(),
        label: miner.name!,
        icon: (
          <GatsbyImage
            image={miner.icon?.childImageSharp?.gatsbyImageData!}
            alt={miner.name!}
          />
        ),
        children: [
          {
            key: `/${miner.name?.toLowerCase()}/overclocks/`,
            label: (
              <Link to={`/${miner.name?.toLowerCase()}/overclocks/`}>
                Overclocks
              </Link>
            ),
          },
        ],
      };
    });
  }, [allMinersJson]);

  return (
    <DBContext>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <StaticImage
            src="../images/assignment.png"
            alt="Assignment Icon"
            height={45}
          />
          DRG Completionist
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={200}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[location.pathname]}
              openKeys={openKeys}
              onOpenChange={(keys) =>
                setOpenKeys(keys.filter((x) => !openKeys.includes(x)))
              }
              style={{ height: "100%", borderRight: 0 }}
              items={menuItems}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </DBContext>
  );
}
