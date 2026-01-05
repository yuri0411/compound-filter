import {
  CheckboxGroup,
  type CheckboxItem,
} from "../../../components/CheckboxGroup/CheckboxGroup.tsx";
import { useFormContext } from "react-hook-form";

interface StatusFilterFieldProps {
  options: CheckboxItem<string, string>[];
}
export const StatusFilterField = ({ options }: StatusFilterFieldProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <h5>Status</h5>
      <CheckboxGroup {...register("status")} filterItems={options} />
    </div>
  );
};
