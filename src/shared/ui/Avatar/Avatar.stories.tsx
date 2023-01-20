import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: 'https://avatars.mds.yandex.net/i?id=6549392d40b6ddf42e17ffcc7976508521ca6bcd-5324799-images-thumbs&n=13'
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: 'https://avatars.mds.yandex.net/i?id=6549392d40b6ddf42e17ffcc7976508521ca6bcd-5324799-images-thumbs&n=13'
};
