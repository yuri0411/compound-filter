import { CheckboxGroup } from "../../../components/CheckboxGroup/CheckboxGroup.tsx";
import { useFormContext } from "react-hook-form";

export const StatusFilterField = () => {
  const { register } = useFormContext();
  return (
    <div>
      <h5>Status</h5>
      <CheckboxGroup
        {...register("status")}
        filterItems={[
          { id: "pending", name: "대기중" },
          { id: "progress", name: "진행중" },
          { id: "resolved", name: "완료" },
        ]}
      />
    </div>
  );
};
