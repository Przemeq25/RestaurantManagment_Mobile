import React from 'react';
import {Portal, Title, useTheme, Modal as PaperModal} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

const modalStyle = {
  backgroundColor: 'white',
  margin: 10,
  display: 'flex',
  flex: 1,
  borderRadius: 5,
  overflow: 'hidden',
};

const StyledModalScrollWrapper = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    minHeight: '100%',
    padding: 20,
  },
}))``;
const StyledModalTitleBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Modal = ({handleToggleFiltersModal, visible, children, title}) => {
  const {colors} = useTheme();
  return (
    <Portal>
      <PaperModal
        visible={visible}
        onDismiss={handleToggleFiltersModal}
        contentContainerStyle={modalStyle}>
        <StyledModalScrollWrapper>
          <StyledModalTitleBar>
            <Title theme={{colors: {text: colors.secondary}}}>{title}</Title>
            <TouchableOpacity onPress={handleToggleFiltersModal}>
              <Icon name="close" size={24} color={colors.primary} />
            </TouchableOpacity>
          </StyledModalTitleBar>
          {children}
        </StyledModalScrollWrapper>
      </PaperModal>
    </Portal>
  );
};
export default Modal;
