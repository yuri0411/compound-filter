import { Navigate, Route, Routes } from "react-router-dom";
import ConfigFilterDemo from "./pages/ConfigFilterDemo.tsx";
import CompositeFilterDemo from "./pages/CompositeFilterDemo.tsx";
import CompoundFilterDemo from "./pages/CompoundFilterDemo.tsx";
import RootLayout from "./layouts/RootLayout.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Navigate to="/compound" replace />} />
        <Route path="/compound" element={<CompoundFilterDemo />} />
        <Route path="/config" element={<ConfigFilterDemo />} />
        <Route path="/composite" element={<CompositeFilterDemo />} />
      </Route>
    </Routes>
  );
}

export default App;
