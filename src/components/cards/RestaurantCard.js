import React from 'react';
import {Caption, Card, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import {navigate} from '../../config/route';
import {getCuisineTypeValue} from '../../helpers/_helpers';

const StyledRestaurantCard = styled(Card)`
  margin-bottom: 10px;
  border-radius: 18px;
  overflow: hidden;
`;

const RestaurantCard = ({restaurant}) => {
  const {colors} = useTheme();
  return (
    <StyledRestaurantCard
      elevation={4}
      onPress={() =>
        navigate('SingleRestaurant', {
          restaurantName: restaurant.name,
          restaurantData: restaurant
        })
      }>
      <Card.Cover source={{uri: restaurant.image}} resizeMode="contain" />
      <Card.Title title={restaurant.name} subtitle={getCuisineTypeValue(restaurant.category).map(e => e.label).join(", ")} />
      <Card.Actions style={{paddingLeft: 16}}>
        <Icon
          name="home"
          size={20}
          color={colors.secondary}
          style={{marginRight: 5}}
        />
        <Caption>{restaurant.city} - {restaurant.city} {restaurant.houseNumber}</Caption>
        <Icon
          name="phone"
          size={20}
          color={colors.secondary}
          style={{marginRight: 5, marginLeft: 10}}
        />
        <Caption>{restaurant.phoneNumber}</Caption>
      </Card.Actions>
    </StyledRestaurantCard>
  );
};
export default RestaurantCard;
