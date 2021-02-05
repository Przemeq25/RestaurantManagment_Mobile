import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Caption,
  Subheading,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper';
import StyledCard from '../styled/StyledCard';
import styled from 'styled-components';
import {StyledBasketCardTotalPrice} from '../styled/StyledBasketCardTotalPrice';
import {FlexRow} from '../styled/FlexRow';

const StyledTitle = styled(Title)`
  line-height:20px;
`;

const StyledBasketCardTextInput = styled(TextInput)`
  height: 20px;
  width: 40px;
  font-size: 13px;
`;

const BasketCard = ({
  name,
  unitPrice,
  totalPrice,
  image,
  amount,
    id,
  handleDeleteProduct,
  handleIncrementProduct,
  handleDecrementProduct,
}) => {
  const {colors} = useTheme();
  return (
    <StyledCard uri={image}>
      <View style={{width: '70%'}}>
        <StyledTitle>{name}</StyledTitle>
      </View>
      <FlexRow>
        <TouchableOpacity onPress={()=>handleIncrementProduct(id)}>
          <Icon
            name="control-point"
            size={20}
            color={colors.secondary}
            style={{marginRight: 5, marginTop: 5}}
          />
        </TouchableOpacity>
        <StyledBasketCardTextInput mode="outlined" value={`${amount}`} disabled/>
        <TouchableOpacity onPress={()=>handleDecrementProduct(id)}>
          <Icon
            name="remove-circle-outline"
            size={20}
            color={colors.secondary}
            style={{marginLeft: 5, marginTop: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleDeleteProduct(id)}>
          <Icon
            name="delete"
            size={20}
            color={colors.primary}
            style={{marginLeft: 5, marginTop: 5}}
          />
        </TouchableOpacity>
      </FlexRow>
      <StyledBasketCardTotalPrice>
        <Subheading theme={{colors: {text: colors.secondary}}}>
          {totalPrice.toFixed(2)} zł
        </Subheading>
        <Caption>1szt: {unitPrice.toFixed(2)}zł</Caption>
      </StyledBasketCardTotalPrice>
    </StyledCard>
  );
};
export default BasketCard;
