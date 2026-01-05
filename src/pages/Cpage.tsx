import { Filter } from "../features/Filter/Filter.tsx";
import { LocationFilterField } from "../features/Filter/fields/LocationFilterField.tsx";
import { StatusFilterField } from "../features/Filter/fields/StatusFilterField.tsx";

const Cpage = () => {
  return (
    <div>
      <h1>컴포넌트 합성 기반 — Filter demo</h1>
      <Filter onSubmit={(data) => console.log(data)}>
        <LocationFilterField />
        <StatusFilterField />
      </Filter>
    </div>
  );
};

export default Cpage;
