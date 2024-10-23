import React from 'react';
import WeekDay from './WeekDays.tsx';

export default {
  title: 'WeekDays',
  component: WeekDay,
};

const Template = (args) => <WeekDay {...args}/>;

export const Active = Template.bind({});
Active.args = {
  variant : "active",
  title : "We"
};

export const Disable = Template.bind({})
Disable.args = {
  variant : "disable",
  title : "We"
}