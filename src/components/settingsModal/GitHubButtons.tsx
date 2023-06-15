import { Row, Space } from 'antd';
import GitHubButton from 'react-github-btn';

export default function GitHubButtons() {
  return (
    <Row justify="center">
      <Space>
        <GitHubButton
          aria-label="Star spicyboys/drg-completionist on GitHub"
          data-icon="octicon-star"
          data-show-count="true"
          data-size="large"
          data-text="Star"
          href="https://github.com/spicyboys/drg-completionist"
        />
        <GitHubButton
          aria-label="Fork spicyboys/drg-completionist on GitHub"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-repo-forked"
          data-show-count="true"
          data-size="large"
          data-text="Fork"
          href="https://github.com/spicyboys/drg-completionist/fork"
        />
        <GitHubButton
          aria-label="Issue spicyboys/drg-completionist on GitHub"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-issue-opened"
          data-show-count="true"
          data-size="large"
          data-text="Issues"
          href="https://github.com/spicyboys/drg-completionist/issues"
        />
      </Space>
    </Row>
  );
}
