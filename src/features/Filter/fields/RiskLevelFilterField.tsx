import { useFormContext } from "react-hook-form";
import { Radio } from "../../../components/Radio/Radio.tsx";
import type { CheckboxItem } from "../../../components/CheckboxGroup/CheckboxGroup.tsx";

interface RiskLevelFilterFieldProps {
  options: CheckboxItem<string, string>[];
}

export const RiskLevelFilterField = ({ options }: RiskLevelFilterFieldProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <h5>RiskLevel</h5>
      <Radio {...register("riskLevel")} items={options} />
    </div>
  );
};
