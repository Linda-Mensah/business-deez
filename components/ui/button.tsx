import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "success" | "error";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-[#4A7F73] to-[#6BA598] text-white hover:shadow-lg hover:-translate-y-0.5 transition-all",
      secondary:
        "bg-gradient-to-r from-[#A7C7E7] to-[#4A7F73] text-[#2C4A3E] hover:shadow-lg hover:-translate-y-0.5 transition-all",
      outline:
        "border-2 border-[#7CB9A8] text-[#7CB9A8] hover:bg-[#7CB9A8]/5 transition-all",
      success: "bg-[#9BC4B0] text-white hover:bg-[#8BB4A0] transition-all",
      error: "bg-[#E6A4B4] text-white hover:bg-[#D694A4] transition-all",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-xl",
      md: "px-6 py-2.5 text-base rounded-xl",
      lg: "px-8 py-3 text-lg rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-medium transition-all duration-200 cursor-pointer transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
