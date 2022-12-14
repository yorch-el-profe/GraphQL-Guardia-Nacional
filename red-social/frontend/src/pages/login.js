import { execute } from "graphql";

function Login() {
  function loginHandler(data) {
    execute({
      variables: {},
    });
  }

  /*if (data) {
    localStorage.setItem("token", token);
    // redireccion hacia el inicio
  }*/

  return (
    <form noValidate>
      <h2 className="mb-3">Iniciar sesión</h2>
      <div className="mb-3">
        <label for="emailInput" className="form-label">
          Correo Electrónico
        </label>
        <input type="email" className="form-control" id="emailInput" />
      </div>
      <div className="mb-3">
        <label for="passwordInput" className="form-label">
          Contraseña
        </label>
        <input type="password" className="form-control" id="passwordInput" />
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default Login;
