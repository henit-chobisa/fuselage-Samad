import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Bulletin from './Bulletin';

export default {
  title: 'Bulletin',
  component: Bulletin,
  parameters: {
    docs: {
      description: {
        component: 'Bulletin for pinning important messages',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Bulletin'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Bulletin>;

const Template: ComponentStory<typeof Bulletin> = (args) => (
  <Bulletin {...args} />
);

export const Default: ComponentStory<typeof Bulletin> = Template.bind({});

Default.args = {
  messages: [
    { clickable: true },
    { clickable: true },
    { clickable: true },
    { clickable: true },
    { clickable: true },
    { clickable: true },
    { clickable: true },
  ],
};
