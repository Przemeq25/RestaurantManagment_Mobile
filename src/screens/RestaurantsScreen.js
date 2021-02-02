import React from 'react';
import {StyledTitle} from '../components/styled/StyledTitle';
import {
  ActivityIndicator,
  Button,
  Caption,
  Card,
  Paragraph,
  Searchbar,
  Title,
  useTheme,
} from 'react-native-paper';
import {StyledScrollWrapper} from '../components/styled/StyledScrollWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import {View} from 'react-native';

const StyledFilterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const StyledCard = styled(Card)`
  margin-bottom: 10px;
  border-radius: 18px;
  overflow: hidden;
`;

const RestaurantScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <StyledScrollWrapper>
      <StyledTitle color={colors.secondary}>Dostępne restauracje</StyledTitle>
      <Searchbar
        placeholder="Szukaj"
        style={{height: 40}}
        inputStyle={{fontSize: 16}}
      />
      <StyledFilterWrapper>
        <Button mode="contained" color={colors.secondary} dark icon="sort">
          Filtry
        </Button>
        <Button color={colors.secondary}>Sortuj</Button>
      </StyledFilterWrapper>
      {/*<ActivityIndicator animating={true} color={colors.secondary} size={40}/>*/}
      <StyledCard
        elevation={4}
        onPress={() =>
          navigation.navigate('SingleRestaurant', {
            restaurantName: 'Wiejska',
            restaurantId: 123,
        })}>
        <Card.Cover source={{uri: ''}} resizeMode="contain" />
        <Card.Title title="Wiejska" subtitle="Fast food, Pizza" />
        <Card.Actions style={{paddingLeft: 16}}>
          <Icon
            name="home"
            size={20}
            color={colors.secondary}
            style={{marginRight: 5}}
          />
          <Caption>Tarnów - Mickiewicza 245</Caption>
          <Icon
            name="phone"
            size={20}
            color={colors.secondary}
            style={{marginRight: 5, marginLeft: 10}}
          />
          <Caption>434 343 432</Caption>
        </Card.Actions>
      </StyledCard>
    </StyledScrollWrapper>
  );
};
export default RestaurantScreen;
