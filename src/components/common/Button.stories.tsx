import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['filled', 'outlined', 'text'],
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'large'],
        },
        state: {
            control: { type: 'select' },
            options: ['default', 'pressed', 'disabled', 'destructive'],
        },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
    variant: 'filled',
    size: 'medium',
    state: 'default',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    size: 'medium',
    state: 'default',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    size: 'medium',
    state: 'default',
};

export const LargeFilled = Template.bind({});
LargeFilled.args = {
    variant: 'filled',
    size: 'large',
    state: 'default',
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
    variant: 'outlined',
    size: 'medium',
    state: 'disabled',
};

export const DestructiveText = Template.bind({});
DestructiveText.args = {
    variant: 'text',
    size: 'medium',
    state: 'destructive',
};