import { NavLink, Outlet } from "react-router-dom";

const stylesContent = {
  fontSize: "1.3rem",
};

export default function Estudiantes() {
  return (
    <main className="flex gap-5 py-4 px-12 ">
      <aside className="flex-0">
        <NavLink
          style={stylesContent}
          className={({ isActive, isPending }) =>
            isActive ? "active-content" : isPending ? "pending" : ""
          }
          to="contenido-estudiantes"
        >
          contenido de Estudiantes
        </NavLink>
      </aside>
      <section className="flex-1">
        <Outlet />
      </section>
    </main>
  );
}
