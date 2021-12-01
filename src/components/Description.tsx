import React from "react";
import { makeStyles, Typography } from '@material-ui/core';

export type DescriptionProps = {
  description: string;
};

const useStyles = makeStyles({
  root: {
    color: 'rgb(116, 127, 138)',
    fontFamily: 'CSClarity-Regular',
    fontSize: '14px',
    fontWeight: 'normal',
    height: '20px',
    lineHeight: '20px',
  },
});

export default function Description({
  description
}: DescriptionProps) {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>{description}</Typography>
  );
}
