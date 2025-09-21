import type { Meta, StoryObj } from '@storybook/react-vite';

import Textarea from './Textarea';
import { FORM_SIZES } from '../utils/constants';

const meta = {
  component: Textarea,
  argTypes: {
    size: {
      control: 'radio',
      options: FORM_SIZES,
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
