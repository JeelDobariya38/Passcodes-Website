import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center gap-2', {
  variants: {
    variant: {
      primary: 'btn btn-primary',
      secondary: 'btn btn-outline',
      filled: 'btn btn-filled',
      ghost: 'btn btn-ghost',
    },
    size: {
      sm: 'btn-small',
      md: '',
      lg: '',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = 'Button';

interface ButtonLinkProps
  extends
    AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
