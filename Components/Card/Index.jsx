import React from 'react';
import MuiCard from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    maring: theme.spacing(1),
  },
}));

const Card = (props) => {
  const classes = useStyles();
  const { className, children, ...other } = props;
  return (
    <MuiCard className={`${classes.root} ${className}`} {...other}>
      {children}
    </MuiCard>
  );
};

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
