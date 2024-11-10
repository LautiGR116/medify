import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
    title: 'Common/Button',
    component: Button,
    argTypes: {
        label: { control: 'text' }, // New argument for button text
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

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
    label: 'Button', // Default text for the button
    variant: 'filled',
    size: 'medium',
    state: 'default',
};

