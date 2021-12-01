import React from "react";
import { Box, makeStyles, Chip } from '@material-ui/core';

export type TagProps = {
  text: string;
  textColour?: string;
  backgroundColour?: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'CSClarity-Regular',
    fontSize: '12px',
    fontWeight: 'normal',
    height: '16px',
    letterSpacing: '0.4px',
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
}));

export default function Tag({
  text,
  textColour,
  backgroundColour
}: TagProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root} style={{justifyContent: 'bottom'}}>
      <Chip style={{
        color: textColour || 'black', 
        background: backgroundColour || '#EEEFF1',
        borderRadius: '5px',
        }} label={text}/>
    </Box>
  );
}
