import './login.scss';

function Login(props) {
  return (
    <div className='Login'>
      <div className='form_box m-3'>
        <h1 className='mb-4 display-4'>
          {props.registered ? 'Welcome Back' : 'Create an Account'}
        </h1>

        <form>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              placeholder='Username'
              name='username'
            />
            <label htmlFor='floatingInput'>Username</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              name='password'
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          {!props.registered && (
            <div className='form-floating mb-3'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword2'
                placeholder='Confirm Password'
                name='confirmpassword'
              />
              <label htmlFor='floatingPassword2'>Confirm Password</label>
            </div>
          )}
          <button className='btn btn-light' type='submit'>
            {props.registered ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
