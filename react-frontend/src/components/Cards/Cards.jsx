import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from "@material-ui/core";

import styles from './Cards.module.css';

const Cards = (props) => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">DATA</Typography>
                    <Typography color="textSecondary">DATE</Typography>
                    <Typography variant="body2">Active COVID-19 cases.</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">DATA</Typography>
                    <Typography color="textSecondary">DATE</Typography>
                    <Typography variant="body2">Recovered COVID-19 cases.</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">DATA</Typography>
                    <Typography color="textSecondary">DATE</Typography>
                    <Typography variant="body2">Deaths from COVID-19</Typography>
                </CardContent>
            </Grid>
            </Grid>
        </div>
    )
}

export default Cards;