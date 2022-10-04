import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { RouterDecorator } from '../../src/shared/config/storybook/RouteDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
// декоратор для прокидывания тем(сторибук ничего не знает о темах)
addDecorator(StyleDecorator)
// светлая как глобальный, для остальных тем будет добавляться локально в каждой стори
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
