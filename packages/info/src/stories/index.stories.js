
import React from 'react';
import { storiesOf } from '@storybook/react';
import Info from '../index';
import Readme from '../../README.md';
// import Usage from '../USAGE.md';

storiesOf('Info', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Readme,
    },
  })
  .add('simple', () => <Info title='标题名' info={99999} />)
