import React from 'react';
import styled from 'styled-components';
import {Button, Text, Title} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import AppLogo from '../AppLogo';
import {useSelector} from 'react-redux';

const StyledWrapper = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${props.color}`,
  },
}))``;
const StyledFormCard = styled.View`
  width: 100%;
  max-width: 350px;
  background-color: #fff;
  margin: 10px;
  padding: 16px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  elevation: 2;
`;
const StyledTitle = styled(Title)`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledLinkButton = styled(Button).attrs((props) => ({
  labelStyle: {
    fontSize: props.size ? props.size : 12,
  },
}))``;

const StyledErrorText = styled(Text)`
  color: ${(props) => props.color};
  text-align: center;
`;

const AuthTemplate = ({
  title,
  children,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
  tertiaryText,
  tertiaryAction,
  error,
  loading,
}) => {
  const {colors} = useTheme();
  return (
    <StyledWrapper color={colors.secondary}>
      <AppLogo />
      <StyledFormCard>
        <StyledTitle>{title}</StyledTitle>
        <StyledErrorText color={colors.error}>{error}</StyledErrorText>
        {children}
        <Button
          dark
          mode="contained"
          color={colors.secondary}
          loading={loading}
          onPress={primaryAction}>
          {primaryText}
        </Button>
        <StyledLinkButton color={colors.secondary} onPress={secondaryAction}>
          {secondaryText}
        </StyledLinkButton>
        {tertiaryAction && (
          <StyledLinkButton
            color={colors.primary}
            onPress={tertiaryAction}
            size={10}>
            {tertiaryText}
          </StyledLinkButton>
        )}
      </StyledFormCard>
    </StyledWrapper>
  );
};
export default AuthTemplate;
