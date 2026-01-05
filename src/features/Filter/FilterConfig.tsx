import {
  type DefaultValues,
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import styles from "./Filter.module.css";
import {
  LocationFilterField,
  RiskLevelFilterField,
  RiskScoreFilterField,
  StatusFilterField,
} from "./fields";
import type { Key } from "react";
import type { CheckboxItem } from "../../components/CheckboxGroup/CheckboxGroup.tsx";

type FormType = "riskScore" | "riskLevel" | "location" | "status";
type Option = CheckboxItem<string, string>;
type ConfigItem = { type: FormType; options?: CheckboxItem<string, string>[] };
type FilterProps<Values extends FieldValues> = {
  onSubmit: SubmitHandler<Values>;
  defaultValues?: DefaultValues<Values>;
  configs: ConfigItem[];
};

export const FilterConfig = <Values extends FieldValues>({
  onSubmit,
  defaultValues,
  configs,
}: FilterProps<Values>) => {
  const methods = useForm<Values>({
    defaultValues,
  });

  const fieldMap = {
    riskScore: (key: Key) => <RiskScoreFilterField key={key} />,
    riskLevel: (key: Key, options: Option[]) => (
      <RiskLevelFilterField key={key} options={options} />
    ),
    location: (key: Key, options: Option[]) => <LocationFilterField key={key} options={options} />,
    status: (key: Key, options: Option[]) => <StatusFilterField key={key} options={options} />,
  };

  function renderField(config: ConfigItem) {
    switch (config.type) {
      case "riskScore":
        return fieldMap.riskScore(config.type);
      case "riskLevel":
        return fieldMap.riskLevel(config.type, config.options!);
      case "location":
        return fieldMap.location(config.type, config.options!);
      case "status":
        return fieldMap.status(config.type, config.options!);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.filterWrapper}>
        {configs.map((config) => renderField(config))}
        <button type="submit" className={styles.submitBtn}>
          적용
        </button>
      </form>
    </FormProvider>
  );
};
