import React,{useEffect} from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from '../../Slices/action';
import { useNavigate } from 'react-router-dom';


// Validation Schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required('User Name is required'),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile Number must be 10 digits')
    .required('Mobile Number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function RegistrationPage() {

  const navigate = useNavigate()
  const msg = useSelector(state => state.rootReducer.registrationMsg)
  const dispatch = useDispatch()

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      username: '',
      mobileNumber: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(userRegistration({
        username: values.username,
        password: values.password,
        mobile: values.mobileNumber
      }))
      resetForm()
    },
  });

  useEffect(() => {
    if (msg === 'registered') {
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    }
  }, [msg])

  return (
    <div className="mt-[62px] md:mt-[70px] bg-[#341C02] py-10 md:py-12">
      <Container sx={{ width: '100%' }}>
        <p className="text-center text-[#f0fdf4] py-4 text-Fxl font-semibold">
          User Registration
        </p>
        <div className='border-[1px] border-green-600 my-[10px] w-full bg-green-50 md:w-[40%] mx-auto px-4 md:px-6 py-10 rounded'>

          <p className='mb-3 py-1 text-red-600 text-center'>{msg}</p>

          <form
            className="flex flex-col justify-center items-center gap-4 "
            onSubmit={formik.handleSubmit} // Form submission handler
          >
            {/* Username Field */}
            <TextField
              label="User Name"
              type="text"
              color="success"
              // required
              name="username"
              sx={{ textTransform: 'capitalize' }}
              value={formik.values.username}
              // onChange={formik.handleChange}
              onChange={(e) => {
                // Capitalize the first letter and update the rest of the value
                const capitalizedUsername = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
                formik.setFieldValue('username', capitalizedUsername);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              fullWidth
            />

            {/* Mobile Number Field */}
            <TextField
              label="Mobile Number"
              type="text"
              color="success"
              // required
              name="mobileNumber"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
              helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
              fullWidth
            />

            {/* Password Field */}
            <TextField
              label="Password"
              type="password"
              color="success"
              // required
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
                type="submit"
              >
                Register
              </Button>
            </div>

          </form>
        </div>
      </Container>

    </div>
  );
}

export default RegistrationPage;
