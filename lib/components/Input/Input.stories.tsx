import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from './Input';
import { FORM_SIZES } from '../utils/constants';

const meta = {
  component: Input,
  argTypes: {
    size: {
      control: 'radio',
      options: FORM_SIZES,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
