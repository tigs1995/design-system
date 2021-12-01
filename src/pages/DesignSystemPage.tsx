import React from "react";
import { Box, makeStyles } from '@material-ui/core';
import Card from "../components/CardComponent";
import { Account, ElectoralRoll } from "../models/reportModel";

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          flexDirection: 'row',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        display: 'flex',
        flexDirection: 'column',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        flexDirection: 'row',
    },
    }
  }));

export type DesignSystemPageProps = {
    courtAndInsolvencies: number;
    accountOffTrack?: Account;
    currentElectoralRoll?: ElectoralRoll;
};

export default function DesignSystemPage({
    courtAndInsolvencies,
    accountOffTrack,
    currentElectoralRoll,
}: DesignSystemPageProps) {
  const classes = useStyles();

  const orangeTextColour = '#764C25';
  const orangeBackgroundColour = '#FDEFE2';
  const greenTextColour = '#15693B';
  const greenBackgroundColour = '#DDF9EA';

  const publicInfoOffTrack = courtAndInsolvencies > 0;
  const creditUtilOffTrack = accountOffTrack;
  const electoralRollOffTrack = !currentElectoralRoll;

  return (
    <Box className={classes.root}>
        <Card 
            titleText="Public information" 
            descriptionText="Bankruptcies and individual voluntary arrangements can damage your score"
            tagImpactText="HIGH IMPACT"
            tagTrackText={publicInfoOffTrack ? "OFF TRACK" : "ON TRACK"}
            tagBackgroundColour={publicInfoOffTrack ? orangeBackgroundColour : greenBackgroundColour}
            tagTextColour={publicInfoOffTrack ? orangeTextColour : greenTextColour}
        />
        <Card 
            titleText="Credit utilisation" 
            descriptionText="Using more than 50% of your available credit can damage your score"
            tagImpactText="MEDIUM IMPACT"
            tagTrackText={creditUtilOffTrack ? "OFF TRACK" : "ON TRACK"}
            tagBackgroundColour={creditUtilOffTrack ? orangeBackgroundColour : greenBackgroundColour}
            tagTextColour={creditUtilOffTrack ? orangeTextColour : greenTextColour}
        />
        <Card 
            titleText="Electoral roll" 
            descriptionText="Being on the electoral roll can improve your score"
            tagImpactText="MEDIUM IMPACT"
            tagTrackText={electoralRollOffTrack ? "OFF TRACK" : "ON TRACK"}
            tagBackgroundColour={electoralRollOffTrack ? orangeBackgroundColour : greenBackgroundColour}
            tagTextColour={electoralRollOffTrack ? orangeTextColour : greenTextColour}
        />
    </Box>
  );
}
