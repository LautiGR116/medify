import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BottomSheet from './BottomSheet';

export default {
    title: 'Components/BottomSheet',
    component: BottomSheet,
} as Meta;

const Template: StoryFn<typeof BottomSheet> = () => <BottomSheet />;

export const Default = Template.bind({});