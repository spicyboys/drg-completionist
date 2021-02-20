import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Grid, Row, Space, Typography, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useCallback, useState } from 'react';
import { MissionControlPortrait } from 'assets/portraits';
import useStore from 'data/useStore';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function AnalyzeSaveFile(props: { hide: () => void }) {
  const [hasClickedButton, setHasClickedButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, dispatch] = useStore();

  const parseSaveFile = useCallback(async (f: RcFile) => {
    setLoading(true);
    try {
      const parser = await import('drg-save-parser');
      const { overclocks } = await parser.parse_save_file(f);
      dispatch({
        type: 'SET_OVERCLOCKS',
        payload: {
          overclocks: overclocks as ReadonlyMap<
            MinerWeapon<Miner>,
            ReadonlySet<string>
          >,
        },
      });
      props.hide();
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Row justify="center">
      <Space size="middle" direction="vertical">
        <Row justify="start">
          <Col span={18} offset={3}>
            <Space direction="vertical">
              <Text>
                Tired of all that clicking around just to input your current
                progress? Upload your save file and let Bosco find your
                overclocks for you!
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
              parseSaveFile(f);
              return false;
            }}
          >
            {loading ? (
              <Button disabled size="large" icon={<LoadingOutlined />}>
                Analyzing...
              </Button>
            ) : (
                <Button type="primary" size="large" icon={<UploadOutlined />} onClick={() => setHasClickedButton(true)}>
                  Select Save File
                </Button>
              )}
          </Upload>
          {useBreakpoint()['xs'] && hasClickedButton ?
            <Col span={20} style={{ marginTop: 24 }}>
              <Space>
                <Avatar
                  size={64}
                  src={MissionControlPortrait}
                  alt="Mission Control"
                />
                <Text>
                  &quot;Management sees your intrepid attempts to access your save file from your mobile device and solutes your efforts.&quot;
                </Text>
              </Space>
            </Col>
            : null}
        </Row>
        <Divider dashed style={{ margin: '12px 0' }} />
        <Row>
          <Col span={18} offset={3}>
            <Text type="secondary">
              <Text strong>{'Note: '}</Text>
              Bosco locally analyzes your save file in your browser to keep it
              safe from pointy-eared leaf-lovers.
            </Text>
          </Col>
        </Row>
      </Space>
    </Row>
  );
}
