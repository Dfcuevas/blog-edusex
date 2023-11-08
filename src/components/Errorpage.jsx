import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <div>
      <h1>Ooppss!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Errorpage;
