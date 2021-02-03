import React from 'react';
import {View} from 'react-native';
import {StyledSubtitle} from '../styled/StyledSubtitle';
import {Subheading, Title, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyledCard from '../styled/StyledCard';
import styled from 'styled-components';

const StyledAddProductButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const StyledTimeToPrepareText = styled.View`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  margin-top: -5px;
  margin-bottom: -10px;
`;

const MenuCard = () => {
  const {colors} = useTheme();
  return (
    <StyledCard>
      <View>
        <StyledTitle>Pizza</StyledTitle>
        <StyledSubtitle>Fast food</StyledSubtitle>
      </View>
      <Subheading theme={{colors: {text: colors.secondary}}}>30 zł</Subheading>
      <StyledTimeToPrepareText>
        <Icon
          name="access-time"
          size={15}
          color={colors.secondary}
          style={{marginRight: 5}}
        />
        <StyledSubtitle> 30min</StyledSubtitle>
      </StyledTimeToPrepareText>
      <StyledAddProductButton>
        <Icon name="add-shopping-cart" size={25} color={colors.secondary} />
      </StyledAddProductButton>
    </StyledCard>
  );
};
export default MenuCard;
