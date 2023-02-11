import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader/>}>
            {route.element}
        </Suspense>
    );
    return (
        <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}/>
    );
  }, []);
  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  );
  /* const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(() => Object.values(routeConfig).filter(route => {
    if (!isAuth && route.authOnly) {
      return false;
    }
    return true;
  }), [isAuth]);
  return (
      <Routes>
          {routes.map(route =>
              <Route key={route.path} path={route.path} element={(
                  <Suspense fallback={<PageLoader/>}>
                      <div className="page-wrapper">
                          {route.element}
                      </div>
                  </Suspense>
                    )}/>
          )}
      </Routes>
  ); */
};

export default memo(AppRouter);
