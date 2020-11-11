import React from 'react';
import styled from 'styled-components';

import { spacing } from '@material-ui/system';
import { Skeleton as MUISkeleton } from '@material-ui/lab';

const StyledSkeleton = styled(
  ({
     margin,
     marginX,
     marginY,
     marginTop,
     marginBottom,
     aspectRatio,
     ...rest
   }) => <MUISkeleton {...rest} />,
)`
  && {
    ${spacing};

    background: rgba(255, 255, 255, 0.04);
  }
`;

const Skeleton = ({ ...props }) => (
  <StyledSkeleton {...props} />
);

export default Skeleton
