import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ContainerForm,
  Heading,
  Title,
  Text,
  Input,
  Required,
  Button,
  TextRequired,
  Box,
} from '../../atoms/styled/styled';

export const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required!'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <ContainerForm>
      <Heading>Password Reset</Heading>
      <Title>We'll email you PIN code for creating your new password.</Title>
      <Text>Email</Text>
      <form onSubmit={formik.handleSubmit}>
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
        <Button type="submit">Send</Button>
      </form>
    </ContainerForm>
  );
};
