import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';

const StyledButton = styled(IconButton)`
  && {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default StyledButton
