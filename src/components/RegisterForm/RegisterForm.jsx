import { Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  VStack
} from '@chakra-ui/react';
import InputField from '../InputField/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { authSelectors } from '../../redux/auth/authSelectors';
import { register} from '../../redux/auth/authOperations';
import { noop } from '../../utils/noop';
import styles from './RegisterForm.module.css'; // Import CSS module
import Notiflix from 'notiflix';
import { Notify } from 'notiflix';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too Short!')
    .max(50, 'Name is too Long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .min(5, 'Password is too Short!')
    .max(50, 'Password is too Long!')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrationLoading = useSelector(authSelectors.registrationLoading);
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    const { email, password, name } = values;
    dispatch(register({ email, password, name }));
    Notiflix.Report.success('Success', 'Registration successful!', 'OK'); 
  };

  return (
    <>
      <div className={styles.bgImg} /> {/* Use className from CSS module */}
      <Flex
        w={{ xs: '100%', md: 'auto' }}
        justify="flex-start"
        alignItems={{ xs: 'flex-start', lg: 'center' }}
        flexGrow="1"
        pt={{ xs: '38px', md: '150px' }}
        pb={{ xs: '50px', lg: '25px' }}
      >
        <Box flexGrow="1">
          <Heading
            as="h1"
            size="xs"
            mb="34px"
            w={{ xs: '100%', md: 'auto' }}
            textAlign={{ xs: 'center', md: 'left' }}
            textTransform="uppercase"
          >
            Registration
          </Heading>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ errors, touched }) => (
              <Form>
                <VStack spacing={7} align="flex-start" mb={{ xs: '60px', lg: '60px' }}>
                  <Field name="name">
                    {({ field, form }) => (
                      <Box w={{ xs: '100%', md: '240px' }}>
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <InputField
                            labelName="Name *"
                            type="text"
                            name="name"
                            handlerEvent={noop}
                            // value={formik.values.name}
                            required
                            width="100%"
                            {...field}
                          />
                            {errors.name && touched.name && (
                            Notify.failure(errors.name)
                          )}
                        </FormControl>
                      </Box>
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, form }) => (
                      <Box w={{ xs: '100%', md: '240px' }}>
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                          <InputField
                            labelName="Email *"
                            type="text"
                            name="email"
                            handlerEvent={noop}
                            // value={formik.values.email}
                            required
                            width="100%"
                            {...field}
                          />
                           {errors.email && touched.email && (
                            Notify.failure(errors.email)
                          )}
                        </FormControl>
                      </Box>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <Box w={{ xs: '100%', md: '240px' }}>
                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                          <InputField
                            labelName="Password *"
                            type="password"
                            name="password"
                            handlerEvent={noop}
                            // value={formik.values.password}
                            required
                            width="100%"
                            {...field}
                          />
                           {errors.password && touched.password && (
                            Notify.failure(errors.password)
                          )}
                        </FormControl>
                      </Box>
                    )}
                  </Field>
                </VStack>
                <Flex gap={6} flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center' }}>
                  
                  <Button variant="primary" type="submit" isLoading={registrationLoading}>
                    Register
                  </Button>
                  <Button variant="outline" type="button" onClick={() => navigate('/login')}>
                    Login
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}
