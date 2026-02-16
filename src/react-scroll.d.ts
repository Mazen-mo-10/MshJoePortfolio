declare module "react-scroll" {
  import { ComponentType } from "react";

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number;
    activeClass?: string;
    [key: string]: unknown;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<{ name: string; [key: string]: unknown }>;
  export const Events: {
    scrollEvent: { register: (name: string, fn: () => void) => void };
  };
}
