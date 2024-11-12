import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Appointment from "./Appointment";

export default {
  title: 'Home/AppointmentReminder',
  component: Appointment,
  argTypes: {
    variant: {
      control: 'select',
      options: ['upcoming', 'history'],
    },
    arrow: {
      control: 'boolean',
    },
  },
} as Meta<typeof Appointment>;

const Template: StoryFn<typeof Appointment> = (args) => {
  return <Appointment {...args} />;
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  name: "Dr. John Doe",
  title: "Radiography",
  time: "14:00",
  day: "15",
  dayName: "TUE",
  arrow: true,
  variant: 'upcoming',
};
