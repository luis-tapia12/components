import type { Meta, StoryObj } from '@storybook/react-vite';

import Checkbox from './Checkbox';
import { FORM_SIZES } from '../utils/constants';

const meta = {
  component: Checkbox,
  argTypes: {
    size: {
      control: 'radio',
      options: FORM_SIZES,
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
