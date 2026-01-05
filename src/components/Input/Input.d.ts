import { type InputHTMLAttributes, type ReactNode } from "react";
import { sizes } from "@/styles/theme";
export declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    variant?: "filled" | "outlined" | "ghost";
    color?: "primary" | "secondary" | "tertiary";
    size?: keyof typeof sizes;
    suffix?: ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
