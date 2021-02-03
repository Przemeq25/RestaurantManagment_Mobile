import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Caption,
  Subheading,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper';
import StyledCard from '../styled/StyledCard';
import styled from 'styled-components';

const StyledTitle = styled(Title)`
  margin-top: -5px;
  margin-bottom: -10px;
`;

const StyledBasketCardTextInput = styled(TextInput)`
  height: 20px;
  width: 40px;
  font-size: 13px;
`;

const StyledBasketCardTotalPrice = styled.View`
  position: absolute;
  top: 10px;
  bottom: 10px;
  right: 10px;
  border-color: #cfcfcf;
  width: 70px;
  height: 100%;
  border-left-width: 1px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
`;
const StyledBasketCardCounter = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const BasketCard = () => {
  const {colors} = useTheme();
  return (
    <StyledCard>
      <View>
        <StyledTitle>Pizza</StyledTitle>
      </View>
      <StyledBasketCardCounter>
        <TouchableOpacity>
          <Icon
            name="control-point"
            size={20}
            color={colors.secondary}
            style={{marginRight: 5, marginTop: 5}}
          />
        </TouchableOpacity>
        <StyledBasketCardTextInput mode="outlined" value="1" />
        <TouchableOpacity>
          <Icon
            name="remove-circle-outline"
            size={20}
            color={colors.secondary}
            style={{marginLeft: 5, marginTop: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="delete"
            size={20}
            color={colors.primary}
            style={{marginLeft: 5, marginTop: 5}}
          />
        </TouchableOpacity>
      </StyledBasketCardCounter>
      <StyledBasketCardTotalPrice>
        <Subheading theme={{colors: {text: colors.secondary}}}>
          30 zł
        </Subheading>
        <Caption>1szt: 30zł</Caption>
      </StyledBasketCardTotalPrice>
    </StyledCard>
  );
};
export default BasketCard;
