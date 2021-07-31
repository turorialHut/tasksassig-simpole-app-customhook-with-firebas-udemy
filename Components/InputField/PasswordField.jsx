import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1, 0),
  },
  textField: {
    width: '100%',
  },
}));

const PasswordField = (props) => {
  const {
    label,
    id,
    value,
    onChange,
    onClick,
    onMouseDown,
    labelWidth,
    ...other
  } = props;
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      className={clsx(classes.margin, classes.textField)}
      variant='outlined'
      {...other}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={labelWidth}
        {...other}
      />
    </FormControl>
  );
};

PasswordField.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  labelWidth: PropTypes.number,
};

PasswordField.defaultProps = {
  labelWidth: 85,
};

export default PasswordField;
