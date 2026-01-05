import { useState } from "react";
import { Filter } from "../features/Filter/Filter";

type FilterValues = {
  location: string[];
  riskLevel: string;
  status: string[];
  riskScore?: number;
};

const Apage = () => {
  const [lastSubmitted, setLastSubmitted] = useState<FilterValues | null>(null);

  return (
    <div>
      <h1>Compound Pattern — Filter demo</h1>

      <Filter<FilterValues>
        defaultValues={{
          location: [],
          status: [],
          riskLevel: "LOW",
        }}
        onSubmit={(data) => {
          setLastSubmitted(data);
        }}
      >
        <Filter.Status />
        <Filter.Location />
        <Filter.RiskLevel />
        <Filter.RiskScore />
      </Filter>

      <section style={{ marginTop: 20 }}>
        <h2>Last submitted values</h2>
        {lastSubmitted && (
          <pre style={{ background: "#f6f8fa", padding: 12, borderRadius: 6 }}>
            {JSON.stringify(lastSubmitted, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
};

export default Apage;
