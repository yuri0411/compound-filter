import { Filter } from "../features/Filter/Filter.tsx";

const Bpage = () => {
  return (
    <div>
      <h1>config props 기반 — Filter demo</h1>
      <Filter
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
