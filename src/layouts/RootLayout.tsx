import { Sidebar } from "../components/Sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        menus={[
          { to: "/a", label: "Apage" },
          { to: "/b", label: "Bpage" },
          { to: "/c", label: "Cpage" },
        ]}
      />
      <div style={{ width: "100%", padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
