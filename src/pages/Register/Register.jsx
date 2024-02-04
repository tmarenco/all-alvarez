import { useFormik } from 'formik';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useEffect } from 'react';


export const Register = () => {

  const { startRegister, statusCreating, errorMessageCreate } = useAuthStore();
  
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''

    },
    onSubmit: values => {
      startRegister({username: values.username, email: values.email, password: values.password});
    }
  });

  useEffect(() => {
    if ( statusCreating === 'created') {
      // Swal.fire('Success', 'User created successfully', 'success')
    }
    if(statusCreating === 'not-created'){
      console.log(errorMessageCreate)
      // Swal.fire('Error', errorMessageCreate, 'error')
    }
  }, [statusCreating]);


  return (
    <>
      <div className='form-wrapper vh-100 d-flex align-items-center justify-content-center'>
        <div className='form'>
          <form onSubmit={ formik.handleSubmit }>
            <div>
              <h2 className='form-title'>Create new user</h2>
              <label className="form-label" htmlFor="order">Username</label>
              <input 
                className="form-control" 
                type="text" 
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
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
              <button type="submit" className="mt-3 btn">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
