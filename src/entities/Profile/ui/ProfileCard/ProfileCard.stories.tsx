import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.RUSSIA,
    lastname: 'Ustyugov',
    name: 'Vladislav',
    city: 'Novosibirsk',
    currency: Currency.RUB,
    avatar: 'https://avatars.mds.yandex.net/i?id=6549392d40b6ddf42e17ffcc7976508521ca6bcd-5324799-images-thumbs&n=13'
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'true'
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};
