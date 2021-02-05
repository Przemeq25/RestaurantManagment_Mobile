import axios from 'axios';
import {appUrl} from '../config/app.config';

const getMeals = (restaurantID, query = {}) => {
  const {category, fromPrice, toPrice, fromTime, toTime, name} = query;
  return axios.get(
    `${appUrl}/restaurant-api/restaurants/${restaurantID}/meals/public`,
    {
      params: {
        category,
        fromPrice,
        toPrice,
        fromTime,
        toTime,
        name,
      },
    },
  );
};

export const mealsService = {
  getMeals,
};
