import { Input } from "../../../components/Input/Input.tsx";
import { Controller, useFormContext, useWatch } from "react-hook-form";

export const RISK_SCORE_RANGE = {
  EXTREME: [100, 224],
  HIGH: [80, 99],
  MODERATE: [50, 79],
  LOW: [1, 49],
} as const;

type RiskLevel = keyof typeof RISK_SCORE_RANGE;

type FilterValues = {
  riskLevel: RiskLevel;
  riskScore?: number;
};

export const RiskScoreFilterField = () => {
  const { control } = useFormContext<FilterValues>();

  const riskLevel = useWatch<FilterValues, "riskLevel">({
    name: "riskLevel",
  });

  const [min, max] = RISK_SCORE_RANGE[riskLevel ?? "LOW"];

  return (
    <div>
      <h5>RiskScore</h5>
      <Controller
        name="riskScore"
        control={control}
        render={({ field }) => (
          <Input type="number" min={min} max={max} {...field} value={field.value ?? min} />
        )}
      />
    </div>
  );
};
