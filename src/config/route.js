import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import RegisterConfirmationScreen from '../screens/Auth/RegisterConfirmationScreen';
import RestaurantScreen from '../screens/RestaurantsScreen';
import {Button, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import AppLogo from '../components/AppLogo';
import UserAccountScreen from '../screens/UserAccountScreen';
import SingleRestaurantScreen from '../screens/SingleRestaurantScreen';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="RegisterConfirmation"
      component={RegisterConfirmationScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const RestaurantStack = createStackNavigator();
const RestaurantStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <RestaurantStack.Navigator initialRouteName="Restaurants"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: colors.contrastText,
        headerRight: () => (
          <Icon
            name="menu"
            size={30}
            style={{padding: 20}}
            color={colors.contrastText}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        ),
      }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{
          headerTitle: 'Restauracje',
        }}
      />
      <RestaurantStack.Screen
        name="SingleRestaurant"
        component={SingleRestaurantScreen}
        options={({route}) => ({
          title: route.params.restaurantName,
        })}
      />
    </RestaurantStack.Navigator>
  );
};

const DrawerUserMenu = createDrawerNavigator();
export const DrawerUserMenuScreen = () => {
  const {colors} = useTheme();
  return (
    <DrawerUserMenu.Navigator
      drawerPosition="right"
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <View style={{paddingTop: 30, paddingBottom: 30, paddingLeft: 10}} >
            <AppLogo/>
          </View>
          <DrawerItemList {...props} >
          </DrawerItemList>
          <View style={{marginTop: 40, paddingLeft: 10, paddingRight: 10}}>
            <Button color={colors.secondary} mode="contained" dark>
              Wyloguj się
            </Button>
          </View>
        </DrawerContentScrollView>
      )}
      drawerContentOptions={{
        activeBackgroundColor: colors.secondary,
        activeTintColor: colors.contrastText,
      }}>
      <DrawerUserMenu.Screen
        name="Restaurants"
        options={{
          title: 'Restauracje',
          drawerIcon: () => (
            <Icon name="restaurant" color={colors.primary} size={22} />
          ),
        }}
        component={RestaurantStackScreen}
      />
      <DrawerUserMenu.Screen
        name="UserAccount"
        options={{
          title: 'Twoje konto',
          drawerIcon: () => (
            <Icon name="person" color={colors.primary} size={22} />
          ),
        }}
        component={UserAccountScreen}
      />
      <DrawerUserMenu.Screen
        name="UserOrders"
        options={{
          title: 'Twoje zamówienia',
          drawerIcon: () => (
            <Icon name="assignment" color={colors.primary} size={22} />
          ),
        }}
        component={UserAccountScreen}
      />
      <DrawerUserMenu.Screen
        name="AdminPanel"
        options={{
          title: 'Panel zarządzania',
          drawerIcon: () => (
            <Icon name="restaurant" color={colors.primary} size={22} />
          ),
        }}
        component={UserAccountScreen}
      />
    </DrawerUserMenu.Navigator>
  );
};

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="User" component={DrawerUserMenuScreen} />
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
