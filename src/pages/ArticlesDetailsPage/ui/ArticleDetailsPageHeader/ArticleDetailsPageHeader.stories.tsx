import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'pages/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    StoreDecorator({})
  ]
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
