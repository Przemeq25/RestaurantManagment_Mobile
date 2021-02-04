import React from 'react';
import {Formik} from 'formik';
import {personalDataInitialValues} from '../helpers/_helpers';
import {StyledForm} from './styled/StyledForm';
import {StyledInput} from './styled/StyledInput';
import {HelperText} from 'react-native-paper';

const PersonalDataForm = () => {
  return (
    <Formik initialValues={personalDataInitialValues}>
      {({errors, values, handleChange}) => (
        <StyledForm>
          <StyledInput
            label="Imię"
            mode="outlined"
            value={values.forename}
            error={Boolean(errors.forename)}
            onChangeText={handleChange('forename')}
          />
          {errors.forename && (
            <HelperText type="error">{errors.forename}</HelperText>
          )}
          <StyledInput
            label="Nazwisko"
            mode="outlined"
            value={values.surname}
            error={Boolean(errors.surname)}
            onChangeText={handleChange('surname')}
          />
          {errors.surname && (
            <HelperText type="error">{errors.surname}</HelperText>
          )}

          <StyledInput
            label="Ulica"
            mode="outlined"
            value={values.street}
            error={Boolean(errors.street)}
            onChangeText={handleChange('street')}
          />
          {errors.street && (
            <HelperText type="error">{errors.street}</HelperText>
          )}
          <StyledInput
            label="Nr domu"
            mode="outlined"
            value={values.houseNumber}
            error={Boolean(errors.houseNumber)}
            onChangeText={handleChange('houseNumber')}
          />
          {errors.houseNumber && (
            <HelperText type="error">{errors.houseNumber}</HelperText>
          )}
          <StyledInput
            label="Kod pocztowy"
            mode="outlined"
            type="number"
            value={values.postCode}
            error={Boolean(errors.postCode)}
            onChangeText={handleChange('postCode')}
          />
          {errors.postCode && (
            <HelperText type="error">{errors.postCode}</HelperText>
          )}
          <StyledInput
            label="Miasto"
            mode="outlined"
            value={values.city}
            error={Boolean(errors.city)}
            onChangeText={handleChange('city')}
          />
          {errors.city && <HelperText type="error">{errors.city}</HelperText>}
          <StyledInput
            label="Nr telefonu"
            mode="outlined"
            type="number"
            value={values.phoneNumber}
            error={Boolean(errors.phoneNumber)}
            onChangeText={handleChange('phoneNumber')}
          />
          {errors.phoneNumber && (
            <HelperText type="error">{errors.phoneNumber}</HelperText>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};
export default PersonalDataForm;
