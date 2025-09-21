import type { Meta, StoryObj } from '@storybook/react-vite';

import Password from './Password';
import { FORM_SIZES } from '../utils/constants';

const meta = {
  component: Password,
  argTypes: {
    size: {
      control: 'radio',
      options: FORM_SIZES,
    },
  },
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
