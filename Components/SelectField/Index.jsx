import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectField = (props, { ...other }) => {
  const classes = useStyles();

  const menuItem = props.items.map((item, index) => (
    <MenuItem value={item.value} key={index}>
      {item.name}
    </MenuItem>
  ));

  return (
    <FormControl
      variant={props.variant}
      className={`${classes.formControl} ${props.className}`}
      required
      fullWidth={props.fullWidth}
    >
      <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <Select
        labelId={props.labelId}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        {...other}
      >
        <MenuItem value=''>Choose Doctor</MenuItem>
        {menuItem}
      </Select>
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
};

SelectField.protoType = {
  label: PropTypes.string,
  labelId: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

SelectField.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
  required: false,
};

export default SelectField;
