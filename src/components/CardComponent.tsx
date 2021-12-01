import React from "react";
import { Box, makeStyles, useTheme } from '@material-ui/core';
import Tag from "./Tag";
import Description from "./Description";
import Title from "./Title";

export type CardComponentProps = {
  tagTrackText: string;
  tagTextColour: string;
  tagBackgroundColour: string;
  tagImpactText: string;
  descriptionText: string;
  titleText: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    color: 'rgb(38, 54, 72)',
    fontFamily: 'CSClarity-Regular',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '20px',
    lineHeight: '20px',
    borderRadius: '10px',
    background: 'white',
    [theme.breakpoints.down('md')]: {
      padding: '16px',
      height: '224px',
      marginRight: '8px',
      minWidth: '178px',
      width: '178px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '24px',
      height: '104px',
      minWidth: '265px',
      width: '265px',
      marginRight: '16px',
      marginBottom: '16px',
    },
    [theme.breakpoints.only('xl')]: {
      padding: '24px',
      height: '104px',
      minWidth: '337px',
      width: '337px',
      marginRight: '16px',
      marginBottom: '16px',
    },
  },
  topTag: {
    marginBottom: '24px',
    [theme.breakpoints.between('md', 'lg')]: {
      display: 'flex',
      justifyContent: 'space-inbetween',
      gap: '16px',
    },
  },
  bottomTag: {
    [theme.breakpoints.down('md')]: {
      marginTop: '112px',
    },
  }
}));

export default function CardComponent({
  tagTrackText,
  tagTextColour,
  tagBackgroundColour,
  tagImpactText,
  descriptionText,
  titleText,
}: CardComponentProps) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      {window.innerWidth < 768 && 
        (
          <Box>
            <Box className={classes.topTag}>
              <Tag text={tagTrackText} textColour={tagTextColour} backgroundColour={tagBackgroundColour}/>
            </Box>
            <Title title={titleText}/>
            <Description description={descriptionText}/>
            <Box className={classes.bottomTag}>
              <Tag text={tagImpactText}/>
            </Box>
          </Box>
      )}
      {window.innerWidth >= 768 && 
        (
          <Box>
            <Box className={classes.topTag}>
              <Tag text={tagTrackText} textColour={tagTextColour} backgroundColour={tagBackgroundColour}/>
              <Tag text={tagImpactText}/>
            </Box>
            <Title title={titleText}/>
            <Description description={descriptionText}/>
          </Box>
      )}
    </Box>
  );
}
