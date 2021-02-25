import React, {useState, useEffect} from 'react';
import {navigate, navigationRef, RootStackScreen} from './src/config/route';
import {NavigationContainer} from '@react-navigation/native';
import Alert from './src/components/Alert';
import {FAB, Text, useTheme} from 'react-native-paper';
import Modal from './src/components/Modal';
import BasketCard from './src/components/cards/BasketCard';
import BasketSummary from './src/components/BasketSummary';
import RestaurantBasketWrapper from './src/components/styled/StyledBasketWrapper';
import {authorization, checkIsLoggedIn, logout} from './src/redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from './src/redux/actions/basket';
import {
  countMinTimeToPrepare,
  renderBastekProducts,
} from './src/helpers/_helpers';

const App = () => {
  const {colors} = useTheme();
  const [isBasketVisible, setBasketVisible] = useState(false);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };
  const handleIncrementProduct = (productId) => {
    dispatch(incrementProduct(productId));
  };
  const handleDecrementProduct = (productId) => {
    dispatch(decrementProduct(productId));
  };

  useEffect(() => {
    const checkAuth = () => {
      checkIsLoggedIn(dispatch)
        .then(() => {
          authorization(dispatch);
        })
        .catch(() => logout());
    };
    checkAuth();
  }, [dispatch]);

  const handleToggleBasketVisible = () => setBasketVisible(!isBasketVisible);

  return (
    <>
      <Alert hideDuration={7000} />
      <NavigationContainer ref={navigationRef}>
        <RootStackScreen />
      </NavigationContainer>
      <FAB
        small
        icon="basket"
        color={colors.contrastText}
        onPress={handleToggleBasketVisible}
        style={{
          backgroundColor: colors.primary,
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
      />
      <Modal
        handleToggle={handleToggleBasketVisible}
        visible={isBasketVisible}
        title="Twoj koszyk">
        {basket.basket.length ? (
          <>
            {renderBastekProducts(basket.basket).map((restaurant) => (
              <RestaurantBasketWrapper
                restaurantName={restaurant.restaurantName}
                key={restaurant.restaurantId}>
                {restaurant.products.map((product) => (
                  <BasketCard
                    key={product.id}
                    {...product}
                    handleDeleteProduct={handleDeleteProduct}
                    handleIncrementProduct={handleIncrementProduct}
                    handleDecrementProduct={handleDecrementProduct}
                  />
                ))}
              </RestaurantBasketWrapper>
            ))}
            <BasketSummary
              handleToggleBasket={handleToggleBasketVisible}
              totalPrice={basket.totalPrice}
            />
          </>
        ) : (
          <Text style={{textAlign: 'center'}}>Brak danych</Text>
        )}
      </Modal>
    </>
  );
};

export default App;
