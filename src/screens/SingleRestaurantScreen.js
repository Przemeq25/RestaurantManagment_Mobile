import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Caption,
  Searchbar,
  Title,
  useTheme,
} from 'react-native-paper';
import styled from 'styled-components';
import {View} from 'react-native';
import {StyledFilterWrapper} from '../components/styled/StyledFilterWrapper';
import {StyledScrollWrapper} from '../components/styled/StyledScrollWrapper';
import Modal from '../components/Modal';

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

const StyledAvatar = styled(Avatar.Image)`
  margin-top: 10px;
  border-radius: 5px;
  height: 80px;
  width: 80px;
`;

const SingleRestaurantScreen = () => {
  const {colors} = useTheme();
  const [visible, setVisible] = useState(false);

  const handleToggleFiltersModal = () => setVisible(!visible);

  return (
    <StyledScrollWrapper>
      <StyledInfoWrapper color={colors.secondary}>
        <View style={{transform: [{scaleX: 0.5}]}}>
          <Title theme={{colors: {text: colors.contrastText}}}>Wiejska</Title>
          <Caption style={{textAlign: 'center'}}>Fast food</Caption>
          <StyledAvatar />
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
      <Modal visible={visible} handleToggleFiltersModal={handleToggleFiltersModal} title="Filtry">

      </Modal>
    </StyledScrollWrapper>
  );
};
export default SingleRestaurantScreen;
