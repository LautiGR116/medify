import React from 'react';
import IconText from './IconText';
import { HalfFilledPill } from "../../svg/medication/Medication";

export default {
  title: 'IconText',
  component: IconText,
};

export const Default = {
  args : {
    icon: <HalfFilledPill width={16} height={16} />,
    text: "X amount of pills left",
    size: "16",
  }
}
