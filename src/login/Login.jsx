const Login = () => {
  return (
    <div className="cover">
      <main className="log">
        <form>
          <img src="https://img.icons8.com/cute-clipart/64/000000/home.png" />
          <h1 className="h3 mb-3 fw-normal letra">Comida App</h1>
          <div className="form-floating entrada">
            <input
              autoFocus
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Usuario</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="password"
              className="form-control entrada"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>

          <div className="checkbox mb-3 mt-2">
            <label>
              <input type="checkbox" value="remember-me" /> Recuerdame
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Iniciar Sesión
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
