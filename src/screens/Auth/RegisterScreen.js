import React, {useRef} from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate';
import {HelperText} from 'react-native-paper';
import {Formik} from 'formik';
import {registerValidationSchema} from '../../helpers/_validation';
import {useDispatch} from 'react-redux';
import {register} from '../../redux/actions/register';
import {StyledForm} from '../../components/styled/StyledForm';
import {StyledInput} from '../../components/styled/StyledInput';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const handlePushToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthTemplate
      title="Zarejestruj się"
      primaryText="Zarejestruj się"
      secondaryText="Masz już konto? Zaloguj się"
      secondaryAction={handlePushToLogin}
      primaryAction={() => formRef.current.handleSubmit()}>
      <Formik
        innerRef={formRef}
        initialValues={{
          login: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          dispatch(register(values.login, values.email, values.password));
        }}>
        {({errors, values, handleChange}) => (
          <StyledForm>
            <StyledInput
              label="Login"
              mode="outlined"
              value={values.login}
              error={Boolean(errors.login)}
              onChangeText={handleChange('login')}
            />
            {errors.login && (
              <HelperText type="error">{errors.login}</HelperText>
            )}
            <StyledInput
              label="Email"
              mode="outlined"
              value={values.email}
              error={Boolean(errors.email)}
              onChangeText={handleChange('email')}
            />
            {errors.email && (
              <HelperText type="error">{errors.email}</HelperText>
            )}
            <StyledInput
              secureTextEntry={true}
              label="Hasło"
              mode="outlined"
              type="password"
              value={values.password}
              error={Boolean(errors.password)}
              onChangeText={handleChange('password')}
            />
            {errors.password && (
              <HelperText type="error">{errors.password}</HelperText>
            )}
            <StyledInput
              secureTextEntry={true}
              label="Potwierdź hasło"
              mode="outlined"
              type="confirmPassword"
              value={values.confirmPassword}
              error={Boolean(errors.confirmPassword)}
              onChangeText={handleChange('confirmPassword')}
            />
            {errors.confirmPassword && (
              <HelperText type="error">{errors.confirmPassword}</HelperText>
            )}
          </StyledForm>
        )}
      </Formik>
    </AuthTemplate>
  );
};
export default RegisterScreen;
