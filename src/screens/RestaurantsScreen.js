import React, {useEffect, useState} from 'react';
import {StyledTitle} from '../components/styled/StyledTitle';
import {
    ActivityIndicator,
    Button,
    Searchbar,
    Text, useTheme,
} from 'react-native-paper';
import {StyledScrollWrapper} from '../components/styled/StyledScrollWrapper';
import {StyledFilterWrapper} from '../components/styled/StyledFilterWrapper';
import {restaurantService} from '../services/restaurantService';
import RestaurantCard from '../components/cards/RestaurantCard';

const RestaurantScreen = () => {
    const {colors} = useTheme();
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(false);
  const [query, setQuery] = useState({
    page: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    restaurantService
      .getAllRestaurants(query)
      .then((res) => {
        setRestaurants(res.data.content);
        setTotalPages(res.data.totalPages);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [query]);

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
      {isLoading ? (
        <ActivityIndicator animating color={colors.secondary} size={40} />
      ) : restaurants.length ? (
        restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))
      ) : (
          <Text style={{textAlign:'center'}}>Brak danych</Text>
      )}
    </StyledScrollWrapper>
  );
};
export default RestaurantScreen;
