import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

const Wrapper = styled(({ withVerticalPadding, ...rest }) => <Grid {...rest} />)`
  max-width: ${({ theme }) => theme.layout.wrapper};
  padding: ${({ withVerticalPadding }) => withVerticalPadding ? '40px' : 0} 16px;
  margin: 0 auto;
`;

Wrapper.propTypes = {
  withVerticalPadding: T.bool,
};

export default Wrapper
