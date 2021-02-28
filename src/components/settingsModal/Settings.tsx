import { Col, Divider, Row, Typography } from 'antd';
import BuyMeACoffee from './BuyMeACoffee';
import GitHubButtons from './GitHubButtons';
import ResetProgress from './ResetProgress';

const { Text } = Typography;

export default function Settings(props: { hide: () => void }) {
  return (
    <>
      <ResetProgress hide={props.hide} />
      <Divider dashed />
      <BuyMeACoffee />
      <Divider dashed />
      <GitHubButtons />
      <Divider dashed />
      <Row justify="center">
        <Col span={18} style={{ textAlign: 'center' }}>
          <Text type="secondary">
            This website is not affiliated with Ghost Ship Games in any way.
            <br />
            (But we really admire their work.)
          </Text>
        </Col>
      </Row>
      <Divider dashed />
      <Row justify="center">
        <Col span={18} style={{ textAlign: 'center' }}>
          <a
            href="https://github.com/BobertForever/drg-completionist/releases/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              alt="Latest GitHub release (latest SemVer)"
              src="https://img.shields.io/github/v/release/BobertForever/drg-completionist"
              style={{ marginBottom: 12, marginTop: -6 }}
            />
          </a>
          <br />
          Up-to-date as of Deep Rock Galactic version{' '}
          <Text code>1.33.49660.0</Text>
        </Col>
      </Row>
      <Divider dashed />
      <Row justify="center">
        <Text>Made with &#x2665; in ATX</Text>
      </Row>
    </>
  );
}
