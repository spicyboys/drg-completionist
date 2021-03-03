import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Space, Typography, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useCallback, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { MissionControlPortrait } from 'assets/portraits';
import Image from 'components/Image';
import useStore from 'store/useStore';
import { getFrameworksFromSaveFile } from './getFrameworksFromSaveFile';
import {
  getOverclocksFromSaveFile,
  getUnforgedOverclocksFromSaveFile,
} from './getOverclocksFromSaveFile';

const { Text } = Typography;

export default function AnalyzeSaveFile(props: { hide: () => void }) {
  const [hasClickedButton, setHasClickedButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, dispatch] = useStore();

  const parseSaveFile = useCallback(
    async (f: RcFile) => {
      setLoading(true);
      try {
        const parser = await import('utils/save-parser');
        const saveFile = await parser.parse_save_file(f);
        dispatch({
          type: 'LOAD_SAVE',
          payload: {
            frameworks: getFrameworksFromSaveFile(saveFile),
            overclocks: getOverclocksFromSaveFile(saveFile),
            unforgedOverclocks: getUnforgedOverclocksFromSaveFile(saveFile),
          },
        });
        props.hide();
      } catch (e) {
        gtag('event', 'exception', {
          description: e,
          fatal: false,
        });
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, props]
  );

  return (
    <Row justify="center">
      <Space size="middle" direction="vertical">
        <Row justify="start">
          <Col span={18} offset={3}>
            <Space direction="vertical">
              <Text>
                Tired of all that clicking around just to input your current
                progress? Upload your save file and let Bosco do all the hard
                work for you!
              </Text>
              <Text>The file is located in your Steam folder by default:</Text>
              <Text code>
                {
                  'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Deep Rock Galactic\\FSD\\Saved\\SaveGames\\<steam_ID>_Player.sav'
                }
              </Text>
            </Space>
          </Col>
        </Row>
        <Row justify="center">
          <Upload
            accept=".sav"
            fileList={[]}
            beforeUpload={(f) => {
              gtag('event', 'analyze_save');
              parseSaveFile(f);
              return false;
            }}
          >
            {loading ? (
              <Button disabled size="large" icon={<LoadingOutlined />}>
                Analyzing...
              </Button>
            ) : (
              <Button
                type="primary"
                size="large"
                icon={<UploadOutlined />}
                onClick={() => setHasClickedButton(true)}
              >
                Select Save File
              </Button>
            )}
          </Upload>
          {hasClickedButton && isMobile ? (
            <Col span={20} style={{ marginTop: 24 }}>
              <Space>
                <Image
                  src={MissionControlPortrait}
                  alt="Mission Control"
                  width={64}
                  height={64}
                />
                <Text>
                  &quot;Management sees your intrepid attempts to access your
                  save file from your mobile device and salutes your
                  efforts.&quot;
                </Text>
              </Space>
            </Col>
          ) : null}
        </Row>
        <Divider dashed style={{ margin: 0 }} />
        <Row>
          <Col span={18} offset={3}>
            <Text type="secondary">
              <Text strong>{'Note: '}</Text>
              Bosco analyzes your save file in your browser locally to keep it
              safe from pointy-eared leaf-lovers.
            </Text>
          </Col>
        </Row>
      </Space>
    </Row>
  );
}
