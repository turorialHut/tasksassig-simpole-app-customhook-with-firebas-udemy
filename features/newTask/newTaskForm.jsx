import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '../../Components/InputField/TextField';
import Button from '../../Components/Button';

const NewTaskForm = (props) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const enteredValue = inputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }

    inputRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs>
            <TextField
              label='Enter text here'
              id='text'
              name='text'
              variant='standard'
              required
              fullWidth={false}
              inputRef={inputRef}
            />
          </Grid>
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              style={{ marginTop: 16 }}
              disabled={props.loading ? true : false}
            >
              {props.loading ? 'Sending' : 'Add Task'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default NewTaskForm;
