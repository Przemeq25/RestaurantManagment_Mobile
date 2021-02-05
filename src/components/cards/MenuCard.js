import React from 'react';
import {View} from 'react-native';
import {StyledSubtitle} from '../styled/StyledSubtitle';
import {Subheading, Title, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyledCard from '../styled/StyledCard';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../redux/actions/basket';

const StyledAddProductButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const StyledTimeToPrepareText = styled.View`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  font-size: 18px;
  line-height: 18px;
`;

const MenuCard = ({
  name,
  id,
  ingredients,
  price,
  timeToDo,
  restaurantName,
  restaurantId,
  image,
  payment,
}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();

  const mealObject = {
    name: name,
    id: id,
    image: image,
    unitPrice: price,
    restaurantName: restaurantName,
    restaurantId: restaurantId,
    restaurantPaymentOnline: payment,
    timeToDo: timeToDo,
  };

  return (
    <StyledCard uri={image}>
      <View style={{width: '80%'}}>
        <StyledTitle>{name}</StyledTitle>
        <StyledSubtitle>{ingredients}</StyledSubtitle>
      </View>
      <Subheading theme={{colors: {text: colors.secondary}}}>
        {price} zł
      </Subheading>
      <StyledTimeToPrepareText>
        <Icon
          name="access-time"
          size={15}
          color={colors.secondary}
          style={{marginRight: 5}}
        />
        <StyledSubtitle> {timeToDo} min</StyledSubtitle>
      </StyledTimeToPrepareText>
      <StyledAddProductButton onPress={() => dispatch(addProduct(mealObject))}>
        <Icon name="add-shopping-cart" size={25} color={colors.secondary} />
      </StyledAddProductButton>
    </StyledCard>
  );
};
export default MenuCard;
