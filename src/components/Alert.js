import React from 'react';
import {Snackbar, useTheme} from 'react-native-paper';
import {resetAlert} from '../redux/actions/alert';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

const StyledAlert = styled(Snackbar)`
  background-color: ${(props) => props.color};
`;

const Alert = ({hideDuration}) => {
  const isAlertOpen = useSelector((state) => state.alert.isOpen);
  const isError = useSelector((state) => state.alert.error);
  const message = useSelector((state) => state.alert.message);
  const dispatch = useDispatch();
  const {colors} = useTheme();

  return (
    <StyledAlert
      duration={hideDuration}
      color={isError ? colors.error : colors.success}
      visible={isAlertOpen}
      onDismiss={() => dispatch(resetAlert())}
    >
      {message}
    </StyledAlert>
  );
};
export default Alert;
