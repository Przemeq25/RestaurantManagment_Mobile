import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  login: Yup.string().required('Pole wymagane'),
  password: Yup.string().required('Pole wymagane'),
});

export const registerValidationSchema = Yup.object().shape({
  login: Yup.string().required('Pole wymagane'),
  password: Yup.string().required('Pole wymagane').min(4,"Hasło musi się składać z przynajmniej 4 znaków"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Podane hasłą różnią się od siebie',
  ),
  email: Yup.string().required('Pole wymagane').email("Podaj poprawny adres email"),
});
export const activateValidationSchema = Yup.object().shape({
  login: Yup.string().required('Pole wymagane'),
  activateKey: Yup.string().required('Pole wymagane')
})
