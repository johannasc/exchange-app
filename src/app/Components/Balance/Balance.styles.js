import styled from 'styled-components';
import { PINK, DARK_GRAY } from '../../../utils/styles.constants';

const BalanceText = styled.p`
  font-size: 12px;
  color: ${props => props.insufficientCurrency ? PINK : DARK_GRAY};
  display: inline-block;
`;

export default BalanceText;
