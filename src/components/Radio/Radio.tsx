import styles from "./Radio.module.css";
import { forwardRef } from "react";

type RadioProps = {
  name: string;
  items: { id: string; name: string }[];
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ name, items, ...radioProps }, ref) => {
    return (
      <div>
        {items.map((item) => (
          <label key={item.id} htmlFor={item.id} className={styles.label}>
            <input
              name={name}
              ref={ref}
              type="radio"
              id={item.id}
              value={item.id}
              className={styles.radio}
              {...radioProps}
            />
            {item.name}
          </label>
        ))}
      </div>
    );
  }
);
