import {
  CheckboxGroup,
  type CheckboxItem,
} from "../../../components/CheckboxGroup/CheckboxGroup.tsx";
import { useFormContext } from "react-hook-form";

interface LocationFilterFieldProps {
  options: CheckboxItem<string, string>[];
}

export const LocationFilterField = ({ options }: LocationFilterFieldProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <h5>Location</h5>
      <CheckboxGroup {...register("location")} filterItems={options} />
    </div>
  );
};
