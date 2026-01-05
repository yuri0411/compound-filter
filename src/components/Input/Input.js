import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Stack } from "../Stack/Stack.tsx";
import { sizes } from "@/styles/theme";
import styles from "./Input.module.css";
import { Typography } from "../Typography/Typography.tsx";
import { cls } from "@/utils";
export const Input = forwardRef(({ variant = "filled", suffix, ...inputProps }, ref) => {
    const mergedClassName = cls(styles.inputWrapper, {
        [styles.border]: variant === "outlined",
    });
    return (_jsxs(Stack, { inline: true, direction: "horizontal", align: "center", className: mergedClassName, children: [_jsx("input", { ref: ref, className: styles.input, ...inputProps }), typeof suffix === "string" ? (_jsx(Typography, { as: "p", variant: "h5", className: styles.suffix, children: suffix })) : (suffix)] }));
});
