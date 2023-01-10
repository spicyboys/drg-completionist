import Image from 'components/Image';
import { CosmeticMatrixItem } from 'data/cosmetics';

export default function CosmeticItemIcon(props: { item: CosmeticMatrixItem }) {
  return (
    <div
      style={{
        position: 'relative',
        height: 100,
        width: 100,
        margin: 'auto',
      }}
    >
      <div
        style={{
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          top: '50%',
          left: '50%',
        }}
      >
        <Image
          alt={props.item.name}
          src={props.item.icon}
          style={{ height: 100, width: 'auto' }}
        />
      </div>
    </div>
  );
}
