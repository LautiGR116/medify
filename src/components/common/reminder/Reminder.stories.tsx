import React from "react";
import Reminder from "./Reminder";
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: "Common/Reminder",
    component: Reminder,
} as Meta<typeof Reminder>;

const Template: StoryFn<typeof Reminder> = args => <Reminder {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: "Half an hour before", checked: true },
        { label: "An hour before", checked: true },
        { label: "Two hours before", checked: false },
        { label: "Three hours before", checked: true },
        { label: "A day before", checked: false },
    ],
};
