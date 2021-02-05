import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Avatar,
  Button,
  Caption,
  Searchbar,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';
import styled from 'styled-components';
import {View} from 'react-native';
import {StyledFilterWrapper} from '../components/styled/StyledFilterWrapper';
import {StyledScrollWrapper} from '../components/styled/StyledScrollWrapper';
import Modal from '../components/Modal';
import {
  getCuisineTypeValue,
  handleRenderMenuByCategory,
} from '../helpers/_helpers';
import {mealsService} from '../services/mealsService';
import {restaurantService} from '../services/restaurantService';
import MenuCard from '../components/cards/MenuCard';

const StyledInfoWrapper = styled.View`
  background-color: ${(props) => props.color};
  transform: scaleX(2);
  height: 300px;
  border-bottom-left-radius: 220px;
  border-bottom-right-radius: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledCategoryBar = styled.View`
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 50px;
  padding: 8px;
  margin-bottom: 8px;
`;

const SingleRestaurantScreen = ({route}) => {
  const {colors} = useTheme();
  const {restaurantData} = route.params;
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [menuCategory, setMenuCategory] = useState([]);
  const [isToggleFiltersDialogOpen, setToggleFiltersDialogOpen] = useState(
    false,
  );
  const [query, setQuery] = useState({});

  useEffect(() => {
    setIsLoading(true);
    mealsService
      .getMeals(restaurantData.id)
      .then((response) => {
        setMeals(response.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [query, restaurantData.id]);

  useEffect(() => {
    const getCategories = () => {
      restaurantService
        .getMenuCatogory(restaurantData.id)
        .then((response) => setMenuCategory(response.data.category))
        .catch(() => setMenuCategory([]));
    };
    getCategories();
  }, [restaurantData.id]);

  const handleToggleFiltersModal = () =>
    setToggleFiltersDialogOpen(!isToggleFiltersDialogOpen);

  return (
    <StyledScrollWrapper>
      <StyledInfoWrapper color={colors.secondary}>
        <View style={{transform: [{scaleX: 0.5}]}}>
          <Title
            theme={{colors: {text: colors.contrastText}}}
            style={{textAlign: 'center'}}>
            {restaurantData.name}
          </Title>
          <Caption style={{textAlign: 'center'}}>
            {getCuisineTypeValue(restaurantData.category)
              .map((e) => e.label)
              .join(', ')}
          </Caption>
          <Avatar.Image
            source={{uri: restaurantData.image}}
            style={{marginLeft: 12}}
          />
        </View>
      </StyledInfoWrapper>
      <Searchbar
        placeholder="Szukaj"
        style={{height: 40}}
        inputStyle={{fontSize: 16}}
      />
      <StyledFilterWrapper>
        <Button
          mode="contained"
          color={colors.secondary}
          dark
          icon="sort"
          onPress={handleToggleFiltersModal}>
          Filtry
        </Button>
      </StyledFilterWrapper>
      <Modal
        visible={isToggleFiltersDialogOpen}
        handleToggleFiltersModal={handleToggleFiltersModal}
        title="Filtry"
      />
      {isLoading ? (
        <ActivityIndicator animating color={colors.secondary} size={40} />
      ) : meals && meals.length ? (
        Object.entries(handleRenderMenuByCategory(meals)).map((category, i) => (
          <View key={i}>
            <StyledCategoryBar color={colors.secondary}>
              <Text theme={{colors: {text: colors.contrastText}}}>
                {' '}
                {category[0] !== 'null' ? category[0] : 'Inne'}
              </Text>
            </StyledCategoryBar>
            {category[1].map((meal) => (
              <MenuCard
                {...meal}
                restaurantName={restaurantData.name}
                restaurantId={restaurantData.id}
                key={meal.id}
                payment={restaurantData.paymentOnline}
              />
            ))}
          </View>
        ))
      ) : (
        <Text style={{textAlign: 'center'}}>Brak danych</Text>
      )}
    </StyledScrollWrapper>
  );
};
export default SingleRestaurantScreen;
