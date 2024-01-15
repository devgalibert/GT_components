import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SmallButton: Story = {
  args: {
    label: "Small Button",
    className: "button__small",
    //👇 The args you need here will depend on your component
  },
};

export const MediumButton: Story = {
  args: {
    label: "Medium Button",
    className: "button__medium",
    //👇 The args you need here will depend on your component
  },
};

export const LargeButton: Story = {
  args: {
    label: "Large Button",
    className: "button__large",
    //👇 The args you need here will depend on your component
  },
};

export const RoundedButton: Story = {
  args: {
    label: "Rounded Button",
    className: "button__medium",
    rounded: true,
    //👇 The args you need here will depend on your component
  },
};

export const DisabledButton: Story = {
  args: {
    label: "Disabled Button",
    className: "button__medium",
    disabled: true,
    //👇 The args you need here will depend on your component
  },
};
