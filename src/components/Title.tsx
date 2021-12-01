import React from "react";
import { makeStyles, Typography } from '@material-ui/core';

export type TagProps = {
  title: string;
};

const useStyles = makeStyles({
  root: {
    color: 'rgb(38, 54, 72)',
    fontFamily: 'CSClarity-Regular',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '20px',
    lineHeight: '20px',
    width: '368px',
  },
});

export default function Tag({
  title
}: TagProps) {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>{title}</Typography>
  );
}
