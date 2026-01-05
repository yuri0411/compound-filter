import { Sidebar } from "../components/Sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        menus={[
          { to: "/compound", label: "compound filter" },
          { to: "/config", label: "config filter" },
          { to: "/composite", label: "composite filter" },
        ]}
      />
      <div style={{ width: "100%", padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
