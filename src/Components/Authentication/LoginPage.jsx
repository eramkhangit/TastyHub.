import React, { useEffect } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../Slices/action';
import { useNavigate } from 'react-router-dom';

// Validation Schema with Yup for Login
const validationSchema = Yup.object({
  username: Yup.string().required('User Name is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function LoginForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const message = useSelector(state => state.rootReducer.loggedUserData.message);

  // Formik Hook for Login
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      dispatch(userLogin({
        username: values.username,
        password: values.password
      }));
      resetForm();
    },
  });

  // Handle submit when the button is clicked
  const handleLoginClick = () => {
    formik.submitForm();  // Manually trigger form submission
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
  }, [message])

  return (
    <div className="mt-[62px] md:mt-[70px] bg-[#341C02] py-10 md:py-12">
      <Container sx={{ width: '100%' }}>

        <p className="text-center text-[#f0fdf4] py-4 text-Fxl font-semibold">
          User Login
        </p>

        <div className='border-[1px] border-green-600 my-[10px] w-full bg-green-50 md:w-[40%] mx-auto px-4 md:px-6 py-10 rounded'>

          {/* Displaying message if available */}
          <p className='mb-3 py-1 text-xl text-red-600 text-center font-semibold'>{message || ''}</p>

          <form
            className="flex flex-col justify-center items-center gap-4"
            onSubmit={formik.handleSubmit} // Form submission handler
          >
            {/* Username Field */}
            <TextField
              label="User Name"
              type="text"
              color="success"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              fullWidth
            />

            {/* Password Field */}
            <TextField
              label="Password"
              type="password"
              color="success"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
            />

            {/* Submit Button */}
            <div className="rounded pt-6 pb-4">
              <Button
                sx={{
                  padding: '8px 37px',
                  border: '1px solid #004225',
                  '&:hover': {
                    backgroundColor: '#004225',
                    color: 'white', // background color on hover
                  },
                }}
                size="medium"
                onClick={handleLoginClick}  // Trigger form submission manually
                disabled={formik.isSubmitting}  // Disable button when submitting
              >
                Login
              </Button>
            </div>
          </form>

        </div>

      </Container>
    </div>
  );
}

export default LoginForm;
