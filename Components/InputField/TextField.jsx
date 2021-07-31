import React from 'react';
import { makeStyles } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0),
  },
}));

const TextField = (props) => {
  const classes = useStyles();
  const {
    variant,
    label,
    id,
    name,
    placeholder,
    value,
    onChange,
    fullWidth,
    ...other
  } = props;
  return (
    <MuiTextField
      variant={variant}
      label={label}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth
      {...other}
      className={classes.root}
    />
  );
};

TextField.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
};

TextField.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
};

export default TextField;
