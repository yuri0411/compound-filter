import { useFormContext } from "react-hook-form";
import { Radio } from "../../../components/Radio/Radio.tsx";

export const RiskLevelFilterField = () => {
  const { register } = useFormContext();

  return (
    <div>
      <h5>RiskLevel</h5>
      <Radio
        {...register("riskLevel")}
        items={[
          { value: "EXTREME", label: "매우 높음" },
          { value: "HIGH", label: "높음" },
          { value: "MODERATE", label: "중간" },
          { value: "LOW", label: "낮음" },
        ]}
      />
    </div>
  );
};
