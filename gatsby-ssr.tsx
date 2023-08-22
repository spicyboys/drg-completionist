import React from 'react';
import Layout from './src/components/Layout';
import { type GatsbySSR } from 'gatsby';
import { ConfigProvider, theme } from 'antd';
import { ProConfigProvider } from '@ant-design/pro-components';
import { DBProvider } from './src/hooks/db';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
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

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHeadComponents([
    <script
      key="umami"
      async
      src="https://analytics.umami.is/script.js"
      data-website-id="2b37ffbd-fdcf-49cc-a00b-de91a36a550d"
      data-do-not-track="true"
    />,
  ]);
  setHtmlAttributes({ lang: "en" });
};
