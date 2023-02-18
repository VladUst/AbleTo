import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../types/user';

export const getUserRole = (state: StateSchema) => state.user.authData?.roles;

export const isAdminRole = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
