import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
  args: {
    children: 'Click on me',
  },
};

export const Warning: Story = {
  args: {
    variant: 'secondary',
    children: 'Warning Button',
  },
};

export const Succes: Story = {
  args: {
    children: 'Sorry ...',
    disabled: true,
    onClick: () => alert('Bravo')
  },
};

export const Groot: Story = {
  args: {
    children: 'Me sappelle',
    onClick: () => alert('Groot')
  },
};