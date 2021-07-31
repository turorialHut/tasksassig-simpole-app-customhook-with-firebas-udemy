import React from 'react';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { variant, color, children, ...other } = props;
  return (
    <MuiButton variant={variant} color={color} {...other}>
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  variant: 'contained',
};

export default Button;
