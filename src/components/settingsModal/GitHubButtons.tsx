import { Row, Space } from 'antd';
import GitHubButton from 'react-github-btn';

export default function GitHubButtons() {
  return (
    <Row justify="center">
      <Space>
        <GitHubButton
          href="https://github.com/BobertForever/drg-completionist"
          data-size="large"
          data-show-count="true"
          aria-label="Star BobertForever/drg-completionist on GitHub"
        >
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/BobertForever/drg-completionist/fork"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork BobertForever/drg-completionist on GitHub"
        >
          Fork
        </GitHubButton>
        <GitHubButton
          href="https://github.com/BobertForever/drg-completionist/issues"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-issue-opened"
          data-size="large"
          data-show-count="true"
          aria-label="Issue BobertForever/drg-completionist on GitHub"
        >
          Issue
        </GitHubButton>
      </Space>
    </Row>
  );
}
