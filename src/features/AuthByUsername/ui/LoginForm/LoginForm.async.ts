import React, { FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(async () => await new Promise(resolve => {
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
