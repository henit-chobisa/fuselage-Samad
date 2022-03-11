import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select } from '../..';

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: '250px',
    placeholder: 'Placeholder here...',
    options: Array.from(
      {
        length: 10,
      },
      (_, i) => [`${i + 1}`, `Item #${i + 1}`]
    ),
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const Errored = Template.bind({});
Errored.args = {
  error: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithoutPlaceholder = Template.bind({});
WithoutPlaceholder.args = {
  placeholder: undefined,
};