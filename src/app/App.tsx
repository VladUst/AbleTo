import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';

const App = () => {
  useEffect(() => {
    document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
  }, []);
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
