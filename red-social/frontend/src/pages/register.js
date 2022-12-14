import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function registerHandler(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(registerHandler)} noValidate>
      <h2 className="mb-3">Registrarse</h2>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          id="emailInput"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="usernameInput" className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          id="usernameInput"
          {...register("username", { required: true })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          id="passwordInput"
          {...register("password", { required: true })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default Register;
