import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from "./Counter";

const meta = {
  title: "Counter",
  component: Counter,
  args: {
    variant: "primary",
  },
  argTypes: {
    variant: { control: "radio" },
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
