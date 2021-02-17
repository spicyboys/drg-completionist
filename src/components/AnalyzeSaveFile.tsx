import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import UploadOutlined from '@ant-design/icons/UploadOutlined';
import { Button, Typography, Space, Row, Upload } from 'antd';
import { useCallback, useState } from 'react';
import useStore from 'data/useStore';
import { Miner } from 'utils/miner';
import parseSaveFile from 'utils/parseSaveFile';
import { MinerWeapon } from 'utils/weapons';

const { Title } = Typography;

export default function AnalyzeSaveFile() {
  const [loading, setLoading] = useState(false);
  const [, dispatch] = useStore();

  const setOverclocks = useCallback(
    (saveFileOverclocks: { weapon: string; name: string }[]) => {
      let overclocks = new Map<string, Set<string>>();
      saveFileOverclocks.forEach((oc) => {
        let weaponOverclocks = overclocks.get(oc.weapon);
        if (weaponOverclocks === undefined) {
          weaponOverclocks = new Set();
        }
        weaponOverclocks.add(oc.name);
        overclocks = overclocks.set(oc.weapon, weaponOverclocks);
      });
      dispatch({
        type: 'SET_OVERCLOCKS',
        payload: {
          overclocks: overclocks as ReadonlyMap<
            MinerWeapon<Miner>,
            ReadonlySet<string>
          >,
        },
      });
    },
    []
  );

  return (
    <Row justify={'center'}>
      <Space size={'middle'} direction={'vertical'}>
        <Row justify={'center'}>
          <Title level={4}>Analyze Save File</Title>
        </Row>
        <Row justify={'center'}>
          <Upload
            accept=".sav"
            fileList={[]}
            beforeUpload={(f) => {
              setLoading(true);
              parseSaveFile(f)
                .then((res) => {
                  setOverclocks(res.overclocks);
                })
                .finally(() => setLoading(false));
              return false;
            }}
          >
            {loading ? (
              <Button disabled={true} icon={<LoadingOutlined />}>
                Analyzing...
              </Button>
            ) : (
              <Button icon={<UploadOutlined />}>Select Save File</Button>
            )}
          </Upload>
        </Row>
      </Space>
    </Row>
  );
}
