import React, {useState} from 'react';
import {
  Button,
  Caption,
  HelperText,
  RadioButton,
  Subheading,
  Text,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper';
import {StyledTitle} from '../components/styled/StyledTitle';
import {StyledScrollWrapper} from '../components/styled/StyledScrollWrapper';
import RestaurantBasketWrapper from '../components/styled/StyledBasketWrapper';
import PaymentCard from '../components/cards/PaymentCard';
import {View} from 'react-native';
import {FlexRow} from '../components/styled/FlexRow';
import styled from 'styled-components';
import {StyledDivider} from '../components/styled/StyledDivider';
import Modal from '../components/Modal';
import {Formik} from 'formik';
import {StyledForm} from '../components/styled/StyledForm';
import {StyledInput} from '../components/styled/StyledInput';
import {personalDataInitialValues} from '../helpers/_helpers';
import {navigate} from '../config/route';
import PersonalDataForm from '../components/PersonalDataForm';

const StyledRadioText = styled(Text)`
  font-size: 12px;
`;
const StyledPersonalDataWrapper = styled.View`
  border-width: 1px;
  border-radius: 5px;
  border-color: #dddddd;
  padding: 0px 16px 16px;
  background-color: white;
  margin-top: 16px;
`;

const StyledBasketCardSummaryText = styled(Subheading)`
  font-weight: bold;
  margin-bottom: -5px;
  text-align: right;
  font-size: 24px;
`;

const DeliveryAndPayment = () => {
  const {colors} = useTheme();
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);

  const handleToggleModalAddress = () =>
    setAddressModalOpen(!isAddressModalOpen);

  return (
    <StyledScrollWrapper>
      <StyledPersonalDataWrapper>
        <StyledTitle color={colors.primary} align="left">
          Dane osobowe
        </StyledTitle>
        <Text>Przemo Przemo</Text>
        <Text>Mickiewicza 9</Text>
        <Text>42-500 Tarnów</Text>
        <Text>324 654 678</Text>
        <Button
          mode="contained"
          color={colors.secondary}
          dark
          style={{width: 150, marginTop: 8}}
          labelStyle={{fontSize: 10}}
          onPress={handleToggleModalAddress}>
          Zmień adres
        </Button>
        <Modal
          visible={isAddressModalOpen}
          title="Zmień adres"
          handleToggle={handleToggleModalAddress}>
          <PersonalDataForm />
        </Modal>
      </StyledPersonalDataWrapper>
      <View>
        <StyledTitle color={colors.primary}>Produkty i dostawa</StyledTitle>
        <RestaurantBasketWrapper restaurantName="Wiejska">
          <PaymentCard />
          <PaymentCard />
          <Subheading>Dostawa i płatnośc:</Subheading>
          <RadioButton.Group>
            <FlexRow>
              <RadioButton value="first" color={colors.secondary} />
              <StyledRadioText>Odbiór w restauracji</StyledRadioText>
            </FlexRow>
            <FlexRow>
              <RadioButton value="second" />
              <StyledRadioText>Dostawa na adres</StyledRadioText>
            </FlexRow>
          </RadioButton.Group>
          <StyledDivider />
          <RadioButton.Group>
            <FlexRow>
              <RadioButton value="first" color={colors.secondary} />
              <StyledRadioText>Płatność przy odbiorze</StyledRadioText>
            </FlexRow>
          </RadioButton.Group>
          <TextInput
            mode="outlined"
            placeholder="Komentarz do zamówienia"
            multiline
            numberOfLines={3}
            style={{fontSize: 12}}
          />
        </RestaurantBasketWrapper>
      </View>
      <StyledPersonalDataWrapper>
        <Title>Podsumowanie</Title>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <View>
            <Text>Całkowity koszt: </Text>
            <Caption>w tym dostawa: </Caption>
          </View>

          <View>
            <StyledBasketCardSummaryText>30zł</StyledBasketCardSummaryText>
            <Caption>0.00zł</Caption>
          </View>
        </View>
        <Button mode="contained" color={colors.secondary} dark>
          Kupuję i płacę
        </Button>
      </StyledPersonalDataWrapper>
    </StyledScrollWrapper>
  );
};
export default DeliveryAndPayment;
