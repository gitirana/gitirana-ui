import { styled } from "./styles";

import { ComponentProps } from "react";

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$green300",
  borderRadius: "$sm",
  padding: "$2 $4",
  border: 0,
  fontWeight: "$medium",
  color: "$white",

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      large: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
