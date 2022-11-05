import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
  return (
      <Routes>
          {Object.values(routeConfig).map(route =>
              <Route key={route.path} path={route.path} element={(
                  <Suspense fallback={<PageLoader/>}>
                      <div className="page-wrapper">
                          {route.element}
                      </div>
                  </Suspense>
                    )}/>
          )}
      </Routes>
  );
};

export default AppRouter;
