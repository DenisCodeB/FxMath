import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'
import { ReactComponent as ArrowRightSVG } from '../../assets/ArrowRight.svg'

type ButtonType = typeof Button

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<ButtonType>

const Template: ComponentStory<ButtonType> = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
    children: 'Click me',
}

export const Secondary = Template.bind({})

Secondary.args = {
    children: (
        <>
            {'Click me'}
            <ArrowRightSVG />
        </>
    ),
}
