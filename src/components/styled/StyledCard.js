import React from 'react';
import styled from 'styled-components';

const StyledCardWrapper = styled.View`
  height: 120px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  elevation: 2;
  margin-bottom: 8px;
`;

const StyledImage = styled.Image`
  height: 120px;
  width: 120px;
  background-color: gainsboro;
`;

const StyledCardContent = styled.View`
  position: relative;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const StyledCard = ({uri = '', children}) => {
  return (
    <StyledCardWrapper>
      <StyledImage
        source={{
          uri: uri,
        }}
      />
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCardWrapper>
  );
};
export default StyledCard;
