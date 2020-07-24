import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.Card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={confirmed.value} duration={2.5} separater="," />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of active cases of COVID-19</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.Card, styles.recovered)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={recovered.value} duration={2.5} separater="," />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of recoveries from COVID-19 </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.Card, styles.deaths)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={deaths.value} duration={2.5} separater="," />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of deaths caused by COVID-19 </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
