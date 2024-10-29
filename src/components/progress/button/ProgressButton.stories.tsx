import React from 'react';
import ProgressButton from './ProgressButton';
import { WeuiArrowFilled } from '../../svg/Arrow';

export default {
  title: 'ProgressButton',
  component: ProgressButton,
};

export const Default = {
  args : {
      textColor: "text-primary-500",
      bgColor : "bg-scale-1000",
      progress: 0.5,
      icon: WeuiArrowFilled
  }
};