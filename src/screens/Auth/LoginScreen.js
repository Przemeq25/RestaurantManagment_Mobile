import React, {useRef} from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate';
import {HelperText} from 'react-native-paper';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../helpers/_validation';
import {login} from '../../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {StyledForm} from '../../components/styled/StyledForm';
import {StyledInput} from '../../components/styled/StyledInput';


const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const handlePushToRegister = () => {
    navigation.navigate('Register');
  };
    const handlePushToActivate = () => {
        navigation.navigate('RegisterConfirmation');
    };

  return (
    <AuthTemplate
      title="Zaloguj się"
      primaryText="Zaloguj się"
      secondaryText="Nie masz konta? Zarejestruj się"
      secondaryAction={handlePushToRegister}
      primaryAction={() => formRef.current.handleSubmit()}
      tertiaryAction={handlePushToActivate}
      tertiaryText="lub aktywuj konto!"
    >
      <Formik
        innerRef={formRef}
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          dispatch(login(values.login, values.password));
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
          </StyledForm>
        )}
      </Formik>
    </AuthTemplate>
  );
};
export default LoginScreen;
