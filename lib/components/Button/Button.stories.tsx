import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';
import { SIZES } from '../utils/constants';

const meta = {
  component: Button,
  argTypes: {
    size: {
      control: 'radio',
      options: SIZES,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => <Button {...args}>Button</Button>,
};
