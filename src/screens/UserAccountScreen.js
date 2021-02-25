import React from 'react';
import {useTheme} from 'react-native-paper';
import {Appbar} from 'react-native-paper';
import {DrawerActions} from '@react-navigation/routers';
import {StyledTitle} from '../components/styled/StyledTitle';


const UserAccountScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
      <>
        <Appbar.Header style={{backgroundColor:colors.secondary}} dark>
          <Appbar.Content title="Twoje konto" />
          <Appbar.Action
              icon="menu"
              size={30}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </Appbar.Header>
          <StyledTitle color={colors.secondary}> Twoje konto</StyledTitle>
      </>
  );
};
export default UserAccountScreen;
