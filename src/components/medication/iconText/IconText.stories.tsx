import React from 'react';
import IconText from './IconText.tsx';
import Pill from "../../svg/pill.png";

export default {
  title: 'IconText',
  component: IconText,
};

const Template = (args) => <IconText {...args}/>;

export const Default = Template.bind({});
Default.args = {
  icon: Pill,
  text: "text"
}
