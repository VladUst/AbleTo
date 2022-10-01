import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
// для проброса ссылок между страницами (роуты как в навбар)
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
)
