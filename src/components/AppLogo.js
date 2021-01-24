import React from 'react';
import styled from 'styled-components';
import {Title} from 'react-native-paper';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';

const StyledTitle = styled(Title)`
  text-align: left;
  line-height: 20px;
  font-size: 22px;
  color:${props=>props.color}
`;

const AppLogo = () => {
  const {colors} = useTheme();

  return (
    <View>
      <StyledTitle color={colors.primary}>restaurant</StyledTitle>
      <StyledTitle color={colors.primary}>management.</StyledTitle>
    </View>
  );
};
export default AppLogo;
