import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { routers } from '../../../../config/routers';
import {
  Box,
  BoxPassword,
  Button,
  Icon,
  Input,
  Link,
  Password,
  Required,
  Text,
  TextRequired,
} from '../../../atoms/styled/styled';

export const FormLogin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required!'),
      password: Yup.string().min(8, 'Minimum 8 characters').required('Required!'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Text>Email</Text>
        <Box>
          <Input
            placeholder={'xxx@gmail.com'}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Box>
        <Required>
          {formik.errors.email && formik.touched.email && <TextRequired>{formik.errors.email}</TextRequired>}
        </Required>
        <Password>
          <Text>Password</Text>
          <Link href={routers.forgotPassword()}>Forgot password?</Link>
        </Password>
        <BoxPassword>
          <Input
            type={passwordShown ? 'text' : 'password'}
            placeholder="At least 8 characters including a number"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {passwordShown ? (
            <Icon>
              <FaEye onClick={togglePassword} />
            </Icon>
          ) : (
            <Icon>
              <FaEyeSlash onClick={togglePassword} />
            </Icon>
          )}
        </BoxPassword>
        <Required>
          {formik.errors.password && formik.touched.password && <TextRequired>{formik.errors.password}</TextRequired>}
        </Required>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};
