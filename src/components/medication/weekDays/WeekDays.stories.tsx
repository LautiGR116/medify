import React from 'react';
import WeekDay from './WeekDays';

export default {
  title: 'WeekDays',
  component: WeekDay,
};

export const Active = {
  key: "active", 
  args : {
  variant : "active",
  title : "We"
  }
};

export const Disable = {
  key: "disable",
  args : {
    variant : "disable",
    title : "We"
  }
}