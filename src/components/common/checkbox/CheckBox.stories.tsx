import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from "./CheckBox";

export default {
    title: "Common/checkbox",
    component: Checkbox,
    argTypes: {
        shape: {
            control: { type: "radio" },
            options: ["square", "circular"],
        },
        label: { control: "text" },
    },
} as Meta<typeof Checkbox>;


const Template:StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    shape: "square",
    label: "Checkbox",
};