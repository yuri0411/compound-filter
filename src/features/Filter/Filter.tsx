import {
  type DefaultValues,
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import type { PropsWithChildren } from "react";
import {
  LocationFilterField,
  RiskLevelFilterField,
  RiskScoreFilterField,
  StatusFilterField,
} from "./fields";
import styles from "./Filter.module.css";

type FilterProps<Values extends FieldValues> = PropsWithChildren<{
  onSubmit: SubmitHandler<Values>;
  defaultValues?: DefaultValues<Values>;
}>;

const FilterRoot = <Values extends FieldValues>({
  onSubmit,
  defaultValues,
  children,
}: FilterProps<Values>) => {
  const methods = useForm<Values>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.filterWrapper}>
        {children}

        <button type="submit" className={styles.submitBtn}>
          적용
        </button>
      </form>
    </FormProvider>
  );
};

FilterRoot.displayName = "Filter";

type FilterComponent = (<Values extends FieldValues>(
  props: FilterProps<Values>
) => React.ReactElement) & {
  Location: typeof LocationFilterField;
  RiskLevel: typeof RiskLevelFilterField;
  RiskScore: typeof RiskScoreFilterField;
  Status: typeof StatusFilterField;
};

export const Filter: FilterComponent = Object.assign(FilterRoot, {
  Location: LocationFilterField,
  RiskLevel: RiskLevelFilterField,
  RiskScore: RiskScoreFilterField,
  Status: StatusFilterField,
});
