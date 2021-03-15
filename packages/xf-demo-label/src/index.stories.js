import Label from "./index";
import React from 'react';

export default {
  title:'packages/label',
  component: Label,
}

const Te = args => <Label {...args} />;
export const Default = Te.bind({});
Default.args = {
  text: '标签的内容'
};
