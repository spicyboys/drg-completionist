import React, { useCallback, useState } from "react";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Space, Typography, Upload } from "antd";
import { RcFile } from "antd/lib/upload";
import { useDB } from "../../hooks/db";
import useGetOverclocksFromSaveFile from "../../hooks/analyze/useGetOverclocksFromSaveFile";

const { Text } = Typography;

export default function AnalyzeModalContent(props: { hide: () => void }) {
  const [loading, setLoading] = useState(false);
  const db = useDB();

  const getOverclocksFromSaveFile = useGetOverclocksFromSaveFile();
  const parseSaveFile = useCallback(
    async (f: RcFile): Promise<void> => {
      setLoading(true);

      try {
        // Parse the save file using the WASM library
        const parser = await (await import("drg-save-parser")).default;
        const saveFile = await parser.parse_save_file(f);

        // Extract the relevant information from the parsed save file
        const overclocks = getOverclocksFromSaveFile(saveFile);

        // Update the store with the new save file data
        await db.transaction("rw", db.tables, async () => {
          await db.clearAll();
          await db.overclocks.bulkAdd(overclocks);
        });

        // Hide the Analyze Modal on Success
        props.hide();
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [db, props]
  );

  const upload = (f: RcFile): false => {
    parseSaveFile(f);
    return false;
  };

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
                  "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Deep Rock Galactic\\FSD\\Saved\\SaveGames\\<steam_ID>_Player.sav"
                }
              </Text>
            </Space>
          </Col>
        </Row>
        <Row justify="center">
          <Upload accept=".sav" fileList={[]} beforeUpload={upload}>
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
        <Divider dashed style={{ margin: 0 }} />
        <Row>
          <Col span={18} offset={3}>
            <Text type="secondary">
              <Text strong>{"Note: "}</Text>
              Bosco analyzes your save file in your browser locally to keep it
              safe from pointy-eared leaf-lovers.
            </Text>
          </Col>
        </Row>
      </Space>
    </Row>
  );
}
