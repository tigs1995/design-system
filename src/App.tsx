import React, { useState, useEffect} from "react";
import { Box, Typography, makeStyles } from '@material-ui/core';
import useSWR from 'swr'
import fetcher from "./hooks/jsonFetcher";
import DesignSystemPage from "./pages/DesignSystemPage";
import { Report } from "./models/reportModel";

const useStyles = makeStyles(theme => ({
  root: {
    background: '#F7F7F8',
    padding: '16px',
    overflow: 'auto',
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: `CSClarity-Bold`,
    background: 'transparent',
    color: '#263648',
    [theme.breakpoints.down('md')]: {
      marginBottom: '9px',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '16px',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [report, setReport] = useState<Report>();

  const { data: reportData } = useSWR('https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714', fetcher);

  useEffect(() => {
    if(reportData){
      setReport(reportData);
    }
  }, [reportData]);

  return (
    <Box className={classes.root}>
      <Typography className={classes.headerTitle}>
        Insights
      </Typography>
      {report && 
        <DesignSystemPage 
          courtAndInsolvencies={report.personal.publicInfo.courtAndInsolvencies.length} 
          accountOffTrack={report.accounts.find((account) => {
              (
              account.accountCategory === "credit_cards" && ((account.overview.balance.amount / 2) >= account.overview.limit.amount)
              )
            })
          } 
          currentElectoralRoll={report.personal.electoralRoll.find((roll) => roll.current)}/>}
    </Box>
  );
}
