import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineL = Template.bind({})
OutlineL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
}
export const OutlineM = Template.bind({})
OutlineM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M
}
export const OutlineXL = Template.bind({})
OutlineXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND
}

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true
}
export const SquareL = Template.bind({})
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L
}

export const SquareM = Template.bind({})
SquareM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M
}

export const SquareXL = Template.bind({})
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL
}
