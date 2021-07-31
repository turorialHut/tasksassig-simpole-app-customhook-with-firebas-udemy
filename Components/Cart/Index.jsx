import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContext from '../../store/cart-context';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <IconButton aria-label='cart' variant='outlined' onClick={props.onClick}>
      <StyledBadge badgeContent={`${numberOfCartItems}`} color='secondary'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

CartButton.propTypes = {
  count: PropTypes.number,
};

export default CartButton;
