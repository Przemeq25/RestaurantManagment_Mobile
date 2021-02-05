import React from 'react';
import {
  Button,
  Caption,
  Subheading,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';
import {View} from 'react-native';
import styled from 'styled-components';
import {navigate} from '../config/route';

const StyledBasketCardSummaryText = styled(Subheading)`
  font-weight: bold;
  margin-bottom: -10px;
  text-align: right;
  font-size: 24px;
`;

const BasketSummary = ({handleToggleBasket, totalPrice}) => {
  const {colors} = useTheme();
  return (
    <View>
      <Title>Podsumowanie</Title>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <Text>Całkowity koszt: </Text>
        <View>
          <StyledBasketCardSummaryText>
            {totalPrice.toFixed(2)} zł
          </StyledBasketCardSummaryText>
          <Caption>+dostawa</Caption>
        </View>
      </View>
      <Button
        mode="contained"
        color={colors.secondary}
        dark
        onPress={() => {
          handleToggleBasket();
          navigate('Payment');
        }}>
        Dostawa i płatność
      </Button>
    </View>
  );
};
export default BasketSummary;
