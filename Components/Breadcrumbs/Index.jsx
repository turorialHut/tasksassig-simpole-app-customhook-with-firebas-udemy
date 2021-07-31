import React from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Link';
import Typography from '../Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiSvgIcon-root': {
      width: '2em',
      fontSize: '0.5rem',
    },
  },
  link: {
    display: 'flex',
  },
}));

const Breadcrumbs = (props) => {
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  return (
    <MuiBreadcrumbs aria-label='breadcrumb' className={classes.root}>
      {props.links.map((link, index) => (
        <Link
          color='inherit'
          href='/'
          onClick={handleClick}
          className={classes.link}
          key={index}
        >
          name
        </Link>
      ))}
      <Typography color='textPrimary' className={classes.link}>
        {props.activeLinkIcon}
        {props.activeLinkName}
      </Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
