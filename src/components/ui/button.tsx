import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-gold",
      action: "btn-gold",
      ghost: "btn-ghost",
      cream: "btn-cream",
      "ghost-dark": "btn-ghost-dark",
    },
    size: {
      default: "",
      lg: "btn-lg",
      block: "btn-block",
    },
  },
  defaultVariants: {
    variant: "action",
    size: "default",
  },
});

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
