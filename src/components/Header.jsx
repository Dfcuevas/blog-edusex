import { Link, NavLink } from "react-router-dom";
import Logo from "/logo.png";
import "../index.css";

const arrayDatosNav = [
  { titulo: "Soy maestro", id: "maestros" },
  { titulo: "Soy estudiante", id: "estudiantes" },
  { titulo: "Soy padre", id: "padres" },
];

const Header = () => {
  return (
    <header className="py-4 px-12 flex justify-between items-center text-purpuraOscuro">
      <div>
        <Link to="/" className="flex items-center gap-4">
          <img
            className="rotate-90"
            src={Logo}
            alt="Logo del blog"
            width={30}
            height={30}
          />
          <span className="text-2xl">Hablemos de Sexualidad</span>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-3 text-2xl">
          {arrayDatosNav.map((item) => (
            <li className="text-purpuraOscuro" key={item.id}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={`/${item.id}`}
              >
                {item.titulo}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
