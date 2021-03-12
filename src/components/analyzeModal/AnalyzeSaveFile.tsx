import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Divider,
  Row,
  Space,
  Typography,
  Upload,
  notification,
} from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useCallback, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { MissionControlPortrait } from 'assets/portraits';
import Image from 'components/Image';
import useDB from 'db/useDB';
import { getFrameworksFromSaveFile } from './getFrameworksFromSaveFile';
import { getOverclocksFromSaveFile } from './getOverclocksFromSaveFile';
import { getPickaxeUniquesFromSaveFile } from './getPickaxeUniquesFromSaveFile';
import { getPickaxesFromSaveFile } from './getPickaxesFromSaveFile';

const { Text } = Typography;

export default function AnalyzeSaveFile(props: { hide: () => void }) {
  const [hasClickedButton, setHasClickedButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const db = useDB();

  const parseSaveFile = useCallback(
    async (f: RcFile) => {
      setLoading(true);
      try {
        // Parse the save file using the WASM library
        const parser = await import('utils/save-parser');
        const saveFile = await parser.parse_save_file(f);

        // Extract the relevant information from the parsed save file
        const overclocks = getOverclocksFromSaveFile(saveFile);
        const frameworks = getFrameworksFromSaveFile(saveFile);
        const pickaxes = getPickaxesFromSaveFile(saveFile);
        const pickaxeUniques = getPickaxeUniquesFromSaveFile(saveFile);

        // Update the store with the new save file data
        await Promise.all([
          (async () => {
            await db.overclocks.clear();
            await db.overclocks.bulkAdd(overclocks);
          })(),
          (async () => {
            await db.frameworks.clear();
            await db.frameworks.bulkAdd(frameworks);
          })(),
          (async () => {
            await db.pickaxes.clear();
            await db.pickaxes.bulkAdd(pickaxes);
          })(),
          (async () => {
            await db.pickaxeUniques.clear();
            await db.pickaxeUniques.bulkAdd(pickaxeUniques);
          })(),
        ]);

        // Show the user a success notification with how many items were
        // successfully imported
        notification.success({
          message: <Text type="success">Save File Analyzed!</Text>,
          description:
            `Successfully imported ${overclocks.length} Overclocks, ` +
            `${frameworks.length} Frameworks, and ` +
            `${pickaxes.length + pickaxeUniques.length} Pickaxe Parts.`,
          duration: 10,
        });

        // Hide the Analyze modal
        props.hide();
      } catch (e) {
        // Catch file analysis errors
        gtag('event', 'exception', {
          description: e,
          fatal: false,
        });
        notification.error({
          message: <Text type="danger">Error Analyzing Save File:</Text>,
          description: <Text code>{e.message}</Text>,
          duration: 10,
        });
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [db, props]
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
