import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  menus: { to: string; label: string }[];
}
export const Sidebar = ({ menus }: SidebarProps) => {
  return (
    <nav className={styles.sidebar}>
      {menus.map((menu) => (
        <NavLink
          key={menu.to}
          to={menu.to}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {menu.label}
        </NavLink>
      ))}
    </nav>
  );
};
