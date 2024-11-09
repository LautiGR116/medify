import React from 'react';
import IconText from './IconText';
import Pill from "../../svg/pill.png";

export default {
  title: 'Cummon-comp/IconText',
  component: IconText,
};

export const Default = {
  args : {
    icon: Pill,
    text: "X amount of pills left"
  }
}
