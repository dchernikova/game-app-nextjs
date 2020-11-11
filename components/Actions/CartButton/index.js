import React from 'react';
import styled from 'styled-components';

import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import Link from '../../Link';
import Button from './../_components/Button';

import { useCart } from '../../../contexts/Cart';

const StyledBadge = styled(Badge)`
  & > .MuiBadge-badge {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

const CartButton = () => {
  const { cart } = useCart();
  const count = cart && cart.length || 0;

  return (
    <Button
      href="/cart"
      component={Link}
    >
      <StyledBadge badgeContent={count}>
        <ShoppingBasketIcon />
      </StyledBadge>
    </Button>
  )
};

export default CartButton
