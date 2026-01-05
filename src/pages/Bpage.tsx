import { Filter } from "../features/Filter/Filter.tsx";

const Bpage = () => {
  return (
    <div>
      <h1>config props 기반 — Filter demo</h1>
      <Filter
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
};

export default Bpage;
