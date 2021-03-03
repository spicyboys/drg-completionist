import { memo } from 'react';

export default memo(function Image(
  props: {
    src: ImgSrc;
    alt: string;
  } & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>
) {
  const { src, alt, style, ...imgProps } = props;
  return (
    <picture>
      <source type="image/webp" srcSet={src.webp} />
      <source type="image/png" srcSet={src.png} />
      <img
        src={src.png}
        alt={alt}
        style={{ display: 'inline-block', ...style }}
        {...imgProps}
      />
    </picture>
  );
});
