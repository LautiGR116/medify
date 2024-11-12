import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BottomSheet, BottomSheetReminderOnly } from './BottomSheet';

export default {
    title: 'Medication/BottomSheet',
    component: BottomSheet,
} as Meta;

// Story for the full BottomSheet component
const Template: StoryFn<typeof BottomSheet> = () => <BottomSheet />;
export const FullBottomSheet = Template.bind({});

// Story for the BottomSheetReminderOnly component
const ReminderOnlyTemplate: StoryFn<typeof BottomSheetReminderOnly> = () => <BottomSheetReminderOnly />;
export const ReminderOnlyBottomSheet = ReminderOnlyTemplate.bind({});