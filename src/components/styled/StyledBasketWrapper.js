import styled from 'styled-components';
import {Text} from 'react-native-paper';
import React from 'react';
import {StyledDivider} from './StyledDivider';

const StyledBasketWrapper = styled.View`
  border-width: 1px;
  border-radius: 5px;
  border-color: #dddddd;
  padding: 5px;
  background-color: white;
`;

const RestaurantBasketWrapper = ({restaurantName, children}) => {
  return (
    <StyledBasketWrapper>
      <Text>Restauracja: {restaurantName}</Text>
      <StyledDivider />
      {children}
    </StyledBasketWrapper>
  );
};
export default RestaurantBasketWrapper;
