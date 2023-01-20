import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading ?? false;
