import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField from './InputField';
import {EmptyBox} from "../../svg/common/Common";

export default {
    title: 'Common/InputField',
    component: InputField,
    argTypes: {
        label: { control: 'text', defaultValue: 'InputText' },
        variant: {
            control: { type: 'select' },
            options: ['fulfilled', 'outlined', 'text'],
        },
        state: {
            control: { type: 'select' },
            options: ['default', 'disabled'],
        },
    },
} as Meta<typeof InputField>;

const Template: StoryFn<typeof InputField> = (args) => (
    <InputField {...args} icon={<EmptyBox />} />
);

export const Default = Template.bind({});
Default.args = {
    variant: 'fulfilled',
    state: 'default',
    label: 'InputText',
};

