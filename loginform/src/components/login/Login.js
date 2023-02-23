import './login.scss';

function Login() {
  return (
    <div className='Login'>
      <div className='form_box m-3'>
        <h1 className='mb-4 display-4'>Welcome Back.</h1>

        <form>
          <div class='form-floating mb-3'>
            <input
              type='text'
              class='form-control'
              id='floatingInput'
              placeholder='Username'
              name='username'
            />
            <label for='floatingInput'>Username</label>
          </div>
          <div class='form-floating mb-3'>
            <input
              type='password'
              class='form-control'
              id='floatingPassword'
              placeholder='Password'
              name='password'
            />
            <label for='floatingPassword'>Password</label>
          </div>

          <button className='btn btn-light' type='submit'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
