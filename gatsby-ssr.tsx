import React from "react";
import Layout from "./src/components/Layout";
import { GatsbySSR } from "gatsby";
import { ConfigProvider, theme } from "antd";
import { ProConfigProvider } from "@ant-design/pro-components";
import { DBProvider } from "./src/hooks/db";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return (
    <ProConfigProvider hashed={false}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <DBProvider>{element}</DBProvider>
      </ConfigProvider>
    </ProConfigProvider>
  );
};
