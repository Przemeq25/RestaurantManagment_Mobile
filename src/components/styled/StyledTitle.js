import styled from 'styled-components';
import {Title} from 'react-native-paper';

export const StyledTitle = styled(Title)`
  color: ${(props) => (props.color ? props.color : '#000')};
  text-align: center;
  margin: 10px;
`;
