import { memo } from 'react';

export default memo(function Image(props: {
  src: ImgSrc;
  alt: string;
  style: React.CSSProperties;
}) {
  return (
    <picture>
      <source type="image/webp" srcSet={props.src.webp} />
      <source type="image/png" srcSet={props.src.png} />
      <img src={props.src.png} alt={props.alt} style={props.style} />
    </picture>
  );
});
