import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Space, Typography, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useCallback, useState } from 'react';
import useStore from 'data/useStore';
import { Miner } from 'utils/miner';
import { MinerWeapon } from 'utils/weapons';

const { Text } = Typography;

export default function AnalyzeSaveFile(props: { hide: () => void }) {
  const [loading, setLoading] = useState(false);
  const [, dispatch] = useStore();

  const parseSaveFile = useCallback(async (f: RcFile) => {
    setLoading(true);
    try {
      const parser = await import('drg-save-parser');
      const { overclocks } = await parser.parse_save_file(f);
      console.log(overclocks);
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
              parseSaveFile(f);
              return false;
            }}
          >
            {loading ? (
              <Button disabled size="large" icon={<LoadingOutlined />}>
                Analyzing...
              </Button>
            ) : (
              <Button type="primary" size="large" icon={<UploadOutlined />}>
                Select Save File
              </Button>
            )}
          </Upload>
        </Row>
        <Divider dashed style={{ margin: '12px 0' }} />
        <Row>
          <Col span={18} offset={3}>
            <Space size="small" direction="vertical">
              <Text type="secondary">
                <Text strong>{'Note: '}</Text>
                Bosco locally analyzes your save file in your browser to keep it
                safe from pointy-eared leaf-lovers.
              </Text>
              <Text type="secondary">
                <Text strong>{'Note: '}</Text>
                This feature is still experimental, and Bosco may not find all
                your progress just yet. R&amp;D is working on an update to fix
                this.
              </Text>
            </Space>
          </Col>
        </Row>
      </Space>
    </Row>
  );
}
