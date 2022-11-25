import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  return (
      <div className={classNames('app', {}, [])}>
          <Suspense fallback="translation loading...">
              <Navbar/>
              <div className="content-page">
                  <Sidebar/>
                  <AppRouter/>
              </div>
          </Suspense>
      </div>
  );
};

export default App;
