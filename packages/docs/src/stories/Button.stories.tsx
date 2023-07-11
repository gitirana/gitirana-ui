import { Button, ButtonProps } from "@gitirana-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "enviar",
  },
} as Meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: "large",
  },
};
