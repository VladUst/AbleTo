import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, cum dolor eaque expedita quod recusandae reprehenderit saepe! Debitis fuga harum illum laboriosam nemo. Aut dignissimos dolor ipsa non sit.\n'
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, cum dolor eaque expedita quod recusandae reprehenderit saepe! Debitis fuga harum illum laboriosam nemo. Aut dignissimos dolor ipsa non sit.\n'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
