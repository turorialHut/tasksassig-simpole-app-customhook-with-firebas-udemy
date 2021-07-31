import React from 'react';
import MuiTypography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Typography = (props) => {
  const { variant, children, ...other } = props;
  return (
    <MuiTypography variant={variant} {...other}>
      {children}
    </MuiTypography>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

export default Typography;
