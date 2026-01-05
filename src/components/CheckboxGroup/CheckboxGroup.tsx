import { useController, useFormContext } from "react-hook-form";
import { Checkbox } from "../Checkbox/Checkbox.tsx";

export interface CheckboxItem<T extends string | number, V extends string> {
  id: T;
  name: V;
}
interface CheckboxProps<T extends string | number, V extends string> {
  name: string;
  filterItems: CheckboxItem<T, V>[];
  defaultValue?: T[];
}
export const CheckboxGroup = <T extends string | number, V extends string>({
  name,
  filterItems,
  defaultValue = [],
}: CheckboxProps<T, V>) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const handleSelectAsId = (idChecked: T, values: CheckboxItem<T, V>["id"][]) => {
    const isIdIncluded = values.includes(idChecked);

    return isIdIncluded ? values.filter((id) => id !== idChecked) : [...values, idChecked];
  };

  return (
    <div>
      {filterItems.map((item) => (
        <Checkbox
          key={item.id}
          label={item.name}
          name={item.name}
          onChange={() => onChange(handleSelectAsId(item.id, value))}
          checked={value?.includes(item.id) ?? false}
        />
      ))}
    </div>
  );
};
