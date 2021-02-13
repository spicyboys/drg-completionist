import { Card } from "antd";

export default function Overclocks() {
  return (
    <Card>
      <Card type="inner" title="Driller">
        Inner Card content
      </Card>
      <Card type="inner" style={{ marginTop: 16 }} title="Engineer">
        Inner Card content
      </Card>
      <Card type="inner" style={{ marginTop: 16 }} title="Gunner">
        Inner Card content
      </Card>
      <Card type="inner" style={{ marginTop: 16 }} title="Scout">
        Inner Card content
      </Card>
    </Card>
  );
}
