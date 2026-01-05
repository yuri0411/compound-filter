import { CheckboxGroup } from "../../../components/CheckboxGroup/CheckboxGroup.tsx";
import { useFormContext } from "react-hook-form";

export const LocationFilterField = () => {
  const { register } = useFormContext();

  return (
    <div>
      <h5>Location</h5>
      <CheckboxGroup
        {...register("location")}
        filterItems={[
          { id: "seoul", name: "서울" },
          { id: "gyeonggi", name: "경기" },
          { id: "incheon", name: "인천" },
        ]}
      />
    </div>
  );
};
