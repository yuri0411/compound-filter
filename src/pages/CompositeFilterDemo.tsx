import { Filter } from "../features/Filter/Filter.tsx";
import { LocationFilterField } from "../features/Filter/fields";
import { StatusFilterField } from "../features/Filter/fields";
import { RiskLevelFilterField, RiskScoreFilterField } from "../features/Filter/fields";
import { LOCATION_OPTIONS, RISKLEVEL_OPTIONS, STATUS_OPTIONS } from "../features/Filter/constans";

const CompositeFilterDemo = () => {
  return (
    <div>
      <h1>컴포넌트 합성 기반 — Filter demo</h1>
      <Filter onSubmit={(data) => console.log(data)}>
        <LocationFilterField options={LOCATION_OPTIONS} />
        <StatusFilterField options={STATUS_OPTIONS} />
        <RiskLevelFilterField options={RISKLEVEL_OPTIONS} />
        <RiskScoreFilterField />
      </Filter>
    </div>
  );
};

export default CompositeFilterDemo;
