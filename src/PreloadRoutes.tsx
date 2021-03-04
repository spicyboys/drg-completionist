import { memo, useEffect, useState } from 'react';
import { TABS } from 'App';

export default memo(function PreloadLazyComponents() {
  const [actPreload, setActPreload] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setActPreload(false);
    }, 500);
    return () => {
      clearTimeout(t);
    };
  });

  if (actPreload) {
    return (
      <div
        style={{
          maxHeight: 0,
          maxWidth: 0,
          opacity: 0,
          position: 'absolute',
          top: '-100%',
          left: '-100%',
        }}
        hidden
      >
        {TABS.map((tab) => {
          return <tab.content key={tab.key} />;
        })}
      </div>
    );
  } else {
    return null;
  }
});
