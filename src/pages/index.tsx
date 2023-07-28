import * as React from "react";
import type { PageProps } from "gatsby";
import { Typography } from "antd";
const { Title } = Typography;

const IndexPage: React.FC<PageProps> = () => {
  return <Title level={4}>Select a page from the menu on the left</Title>;
};

export default IndexPage;
