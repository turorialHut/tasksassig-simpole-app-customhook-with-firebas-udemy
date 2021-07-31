import React, { useState } from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../../Components/Button';
import Box from '@material-ui/core/Box';

const Dialog = (props) => {
  return (
    <MuiDialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-title'
      maxWidth='md'
      fullWidth
    >
      {props.title !== undefined && (
        <DialogTitle id='alert-dialog-title'>{props.title}</DialogTitle>
      )}
      <Box px={2}>{props.children}</Box>
      <DialogActions>
        {props.cancel !== undefined && (
          <Button
            onClick={props.handleClose}
            color={props.colorCancel}
            variant='text'
          >
            {props.cancel}
          </Button>
        )}
        {props.action !== undefined && (
          <Button
            onClick={props.onClickAction}
            color={props.colorAgree}
            autoFocus
            variant='text'
          >
            {props.action}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
