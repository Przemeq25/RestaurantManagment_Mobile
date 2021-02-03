import React, {useState} from 'react';
import {navigationRef, RootStackScreen} from './src/config/route';
import {NavigationContainer} from '@react-navigation/native';
import Alert from './src/components/Alert';
import {FAB, useTheme} from 'react-native-paper';
import Modal from './src/components/Modal';
import BasketCard from './src/components/cards/BasketCard';
import BasketSummary from './src/components/BasketSummary';
import RestaurantBasketWrapper from './src/components/styled/StyledBasketWrapper';

const App = () => {
  const {colors} = useTheme();
  const [isBasketVisible, setBasketVisible] = useState(false);

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
        <RestaurantBasketWrapper restaurantName="Wiejska">
          <BasketCard />
          <BasketCard />
        </RestaurantBasketWrapper>
        <BasketSummary handleToggleBasket={handleToggleBasketVisible} />
      </Modal>
    </>
  );
};

export default App;
