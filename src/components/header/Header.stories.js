import React from 'react';

import { Header } from './Header';

export default {
  title: 'Other/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
  }
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    ...Default.args.user
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: {
    ...Default.args.user
  }
};
