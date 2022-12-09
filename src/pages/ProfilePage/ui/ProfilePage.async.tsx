import React from 'react';

export const ProfilePageAsync = React.lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
