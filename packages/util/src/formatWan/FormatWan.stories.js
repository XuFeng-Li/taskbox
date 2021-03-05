import React from "react";
import { FormatWan } from "./FormatWan";

export default {
  title:'Util/FormatWan',
  component: FormatWan,
}

const Template = args => <FormatWan {...args} />;

export const Default = Template.bind({});
Default.args = {
  val:8888,
};

export const NaNValue = Template.bind({});
NaNValue.args = {
  val:NaN,
};

export const ValueOut = Template.bind({});
ValueOut.args = {
  val:99999999999999999999999999,
};
