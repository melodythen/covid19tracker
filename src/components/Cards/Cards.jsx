import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    //show infected, recovered, death
    //use materialUI 
    if(!confirmed){
        return 'Loading...';
    }
    const percentRecovered = ((recovered.value/confirmed.value) *100).toFixed(2);
    const percentDeaths = ((deaths.value/confirmed.value)*100).toFixed(2);
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} m={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography colour="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                             <CountUp
                                start= {0}
                                end = {confirmed.value}
                                duration= {2.5}
                                separator = ","
                             />
                        </Typography>
                        <Typography colour="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Active Cases of COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} m={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography colour="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                             <CountUp
                                start= {0}
                                end = {recovered.value}
                                duration= {2.5}
                                separator = ","
                             />
                        </Typography>
                        <Typography colour="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Recovered Cases from COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} m={3} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography colour="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                             <CountUp
                                start= {0}
                                end = {deaths.value}
                                duration= {2.5}
                                separator = ","
                             />
                        </Typography>
                        <Typography colour="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Deaths Caused by COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} m={3} className={cx(styles.card, styles.percentage)} >
                    <CardContent>
                        <Typography colour="textSecondary" gutterBottom>% of Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp
                                start= {0}
                                end = {percentRecovered}
                                duration= {2.5}
                                separator = ","
                                decimals= {2}
                             /> %
                        </Typography>
                        <Typography colour="textSecondary" gutterBottom > % of Deaths </Typography>
                        <Typography variant="h5">
                        <CountUp
                                start= {0}
                                end = {percentDeaths}
                                duration= {2.5}
                                separator = ","
                                decimals= {2}
                             /> %
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>


        </div>
    )
}

export default Cards;