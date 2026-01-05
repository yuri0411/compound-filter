import { FilterConfig } from "../features/Filter/FilterConfig.tsx";
import { LOCATION_OPTIONS, RISKLEVEL_OPTIONS, STATUS_OPTIONS } from "../features/Filter/constans";

const Bpage = () => {
  return (
    <div>
      <h1>config props 기반 — Filter demo</h1>
      <FilterConfig
        onSubmit={(data) => {
          console.log(data);
        }}
        configs={[
          {
            type: "location",
            options: LOCATION_OPTIONS,
          },
          {
            type: "status",
            options: STATUS_OPTIONS,
          },
          {
            type: "riskLevel",
            options: RISKLEVEL_OPTIONS,
          },
          {
            type: "riskScore",
          },
        ]}
      />
    </div>
  );
};

export default Bpage;
