import React, { useState } from "react";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Space, Typography, Upload } from "antd";
import { RcFile } from "antd/lib/upload";
import useParseSaveFile from "../../hooks/analyze/useParseSaveFile";

const { Text } = Typography;

export default function AnalyzeModalContent({ hide }: { hide: () => void }) {
  const [loading, setLoading] = useState(false);
  const parseSaveFile = useParseSaveFile();

  const upload = (f: RcFile): false => {
    setLoading(true);
    parseSaveFile(f)
      .then(() => hide())
      .finally(() => setLoading(false));
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
              <Text strong>Note: </Text>
              Bosco analyzes your save file in your browser locally to keep it
              safe from pointy-eared leaf-lovers.
            </Text>
          </Col>
        </Row>
      </Space>
    </Row>
  );
}
