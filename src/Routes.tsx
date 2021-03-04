import { Route, useLocation } from 'react-router-dom';
import AnimatedSwitch from 'AnimatedSwitch';
import { DEFAULT_TAB, TABS } from 'App';

export default function Routes() {
  const location = useLocation();
  return (
    <AnimatedSwitch location={location}>
      {TABS.map((tab) => {
        return (
          <Route
            exact
            key={tab.key}
            path={
              [`/${tab.key}`, tab.key === DEFAULT_TAB ? '/' : undefined].filter(
                (x) => x !== undefined
              ) as string[]
            }
            component={tab.content}
          />
        );
      })}
    </AnimatedSwitch>
  );
}
