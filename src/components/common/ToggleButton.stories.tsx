import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToggleButton from './ToggleButton';

export default {
    title: 'Common/ToggleButton',
    component: ToggleButton,
    argTypes: {
        text1: { control: 'text', defaultValue: 'Option 1' },
        text2: { control: 'text', defaultValue: 'Option 2' },
    },
} as Meta<typeof ToggleButton>;

const Template: StoryFn<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    text1: 'Option 1',
    text2: 'Option 2',
};
