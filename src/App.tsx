import { Navigate, Route, Routes } from "react-router-dom";
import Apage from "./pages/Apage.tsx";
import Bpage from "./pages/Bpage.tsx";
import Cpage from "./pages/Cpage.tsx";
import RootLayout from "./layouts/RootLayout.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Navigate to="/a" replace />} />
        <Route path="/a" element={<Apage />} />
        <Route path="/b" element={<Bpage />} />
        <Route path="/c" element={<Cpage />} />
      </Route>
    </Routes>
  );
}

export default App;
