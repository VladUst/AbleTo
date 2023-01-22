import React from 'react';

export const ArticlesPageAsync = React.lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
