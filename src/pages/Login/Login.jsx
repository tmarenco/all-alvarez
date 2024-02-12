import { useFormik } from 'formik';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useEffect } from 'react';


export const Login = () => {

  const { startLogin, errorMessageLogin } = useAuthStore();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''

    },
    onSubmit: values => {
      startLogin({email: values.email, password: values.password});
    }
  });

  useEffect(() => {
    if ( errorMessageLogin !== undefined) {
      // Swal.fire('Error', errorMessageLogin, 'error')
    }
  }, [ errorMessageLogin ]);
  


  return (
    <>
      <div className='form-wrapper vh-100 d-flex align-items-center justify-content-center'>
        <div className='form'>
          <form onSubmit={ formik.handleSubmit }>
            <div>
              <h2 className='form-title'>Login</h2>
              <label className="form-label" htmlFor="order">Email</label>
              <input 
                className="form-control" 
                type="text" 
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <label className="form-label" htmlFor="order">Password</label>
              <input 
                className="form-control" 
                type="password" 
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <button type="submit" className="mt-3 btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
