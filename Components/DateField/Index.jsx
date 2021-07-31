import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import { oneOfType } from 'prop-types';
import { mergeClasses } from '@material-ui/styles';

const DateField = (props, { ...other }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin='normal'
        id={props.id}
        label={props.label}
        format='MM/dd/yyyy'
        value={props.value}
        onChange={props.onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        fullWidth={props.fullWidth}
        className={props.className}
        {...other}
      />
    </MuiPickersUtilsProvider>
  );
};

DateField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

DateField.defaultProps = {
  fullWidth: true,
};

export default DateField;
