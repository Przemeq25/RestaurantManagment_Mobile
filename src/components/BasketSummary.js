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

const StyledBasketCardSummaryText = styled(Subheading)`
  font-weight: bold;
  margin-bottom: -10px;
  text-align: right;
  font-size: 24px;
`;

const BasketSummary = () => {
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
          <StyledBasketCardSummaryText>30zł</StyledBasketCardSummaryText>
          <Caption>+dostawa</Caption>
        </View>
      </View>
      <Button mode="contained" color={colors.secondary} dark>
        Dostawa i płatność
      </Button>
    </View>
  );
};
export default BasketSummary;
