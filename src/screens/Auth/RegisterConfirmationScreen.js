import React, {useRef} from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate';
import {HelperText} from 'react-native-paper';
import {Formik} from 'formik';
import {activateValidationSchema} from '../../helpers/_validation';
import {useDispatch, useSelector} from 'react-redux';
import {activateAccount} from '../../redux/actions/register';
import {StyledForm} from '../../components/styled/StyledForm';
import {StyledInput} from '../../components/styled/StyledInput';

const RegisterConfirmationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const error = useSelector((state) => state.register.error);
  const loading = useSelector((state) => state.register.isRequesting);
  const handlePushToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <AuthTemplate
      title="Aktywuj konto"
      error={error}
      loading={loading}
      primaryText="Aktywuj teraz"
      secondaryText="Nie masz konta? Zarejestruj się"
      secondaryAction={handlePushToRegister}
      primaryAction={() => formRef.current.handleSubmit()}>
      <Formik
        innerRef={formRef}
        initialValues={{
          login: '',
          activateKey: '',
        }}
        validationSchema={activateValidationSchema}
        onSubmit={(values) => {
          dispatch(activateAccount(values.login, values.activateKey));
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
              label="Klucz aktywacyjny"
              mode="outlined"
              value={values.activateKey}
              error={Boolean(errors.activateKey)}
              onChangeText={handleChange('activateKey')}
            />
            {errors.activateKey && (
              <HelperText type="error">{errors.activateKey}</HelperText>
            )}
          </StyledForm>
        )}
      </Formik>
    </AuthTemplate>
  );
};
export default RegisterConfirmationScreen;
