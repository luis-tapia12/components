import type { Meta, StoryObj } from '@storybook/react-vite';

import Radio from './Radio';
import { FORM_SIZES } from '../utils/constants';

const meta = {
  component: Radio,
  argTypes: {
    size: {
      control: 'radio',
      options: FORM_SIZES,
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <Radio name="radio" {...args} />
      <Radio name="radio" {...args} />
      <Radio name="radio" {...args} />
    </div>
  ),
};
