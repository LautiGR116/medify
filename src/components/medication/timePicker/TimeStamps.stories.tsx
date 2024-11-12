import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TimeStamp } from './TimeStamp';

export default {
    title: 'Medication/TimeStamp',
    component: TimeStamp,
    argTypes: {
        time: { control: 'text' },
    },
} as Meta<typeof TimeStamp>;

const Template: StoryFn<typeof TimeStamp> = (args) => <TimeStamp {...args} />;

export const Default = Template.bind({});
Default.args = {
    time: '9:41 AM',
};
