import type { Meta, StoryObj } from '@storybook/react-vite';

import Select from './Select';
import { FORM_SIZES } from '../utils/constants';

const meta = {
  component: Select,
  argTypes: {
    size: {
      control: 'radio',
      options: FORM_SIZES,
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Select {...args}>
      <option value="value-1">Value 1</option>
      <option value="value-2">Value 2</option>
      <option value="value-3">Value 3</option>
    </Select>
  ),
};
