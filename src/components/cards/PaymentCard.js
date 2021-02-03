import React from 'react';
import {
  Caption,
  Paragraph,
  Subheading,
  Text,
  useTheme,
} from 'react-native-paper';
import StyledCard from '../styled/StyledCard';
import {View} from 'react-native';
import {StyledBasketCardTotalPrice} from '../styled/StyledBasketCardTotalPrice';

const PaymentCard = () => {
  const {colors} = useTheme();
  return (
    <StyledCard>
      <View>
        <Paragraph>Pizza</Paragraph>
      </View>
      <StyledBasketCardTotalPrice>
        <Text>x1</Text>
        <Subheading theme={{colors: {text: colors.secondary}}}>
          30 zł
        </Subheading>
        <Caption>1szt: 30zł</Caption>
      </StyledBasketCardTotalPrice>
    </StyledCard>
  );
};
export default PaymentCard;
