import 'app/styles/index.scss';
import { Story } from '@storybook/react';
// для проброса стилей
export const StyleDecorator = (story: () => Story) => story();
