import { memo } from 'react';

export default memo(function Image(
  props: {
    src: ImgSrc;
    alt: string;
  } & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>
) {
  const { src, alt, ...imgProps } = props;
  return (
    <div style={{ display: 'inline-block' }}>
      <picture>
        <source type="image/webp" srcSet={src.webp} />
        <source type="image/png" srcSet={src.png} />
        <img src={src.png} alt={alt} {...imgProps} />
      </picture>
    </div>
  );
});
