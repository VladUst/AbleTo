import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'text'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  text: 'error',
  theme: TextTheme.ERROR
};

export const Title = Template.bind({});
Title.args = {
  title: 'Title'
};

export const TextL = Template.bind({});
TextL.args = {
  title: 'Title',
  text: 'Text',
  size: TextSize.L
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleDark = Template.bind({});
TitleDark.args = {
  title: 'Title'
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'text'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
