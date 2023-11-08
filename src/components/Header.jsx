import Logo from "../../public/logo.png";

const arrayDatosNav = ["Soy maestro", "Soy estudiante", "Soy padre"];

const Header = () => {
  return (
    <header className="py-4 px-12 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          className="rotate-90"
          src={Logo}
          alt="Logo del blog"
          width={30}
          height={30}
        />
        <span className="text-2xl">Hablemos de Sexualidad</span>
      </div>
      <nav>
        <ul className="flex gap-3 text-2xl">
          {arrayDatosNav.map((item, index) => (
            <li className="text-purpuraOscuro" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
