import React from 'react';

export const ArticleDetailsPageAsync = React.lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
