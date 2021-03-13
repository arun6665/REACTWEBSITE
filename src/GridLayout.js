import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography         from '@material-ui/core/Typography';
import { makeStyles }     from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

mainGridItem: {
    backgroundColor: 'blue'
},
secondRowFirstItem:
{
    backgroundColor: 'green'
},

secondRowSecondItem:
{
    backgroundColor: 'yellow'
}



}));
export default function GridLayout()
{

const classes = useStyles();

return (
<Grid container spacing={3}>
    <Grid item lg={12} sm={12} xs={12}>
        <Typography className={classes.mainGridItem}>
          Main Grid Item  
        </Typography>

    </Grid>
    
    <Grid item sm={6} xs={12}>
       <Typography className={classes.secondRowFirstItem}>
         second row,first item
       </Typography>

    </Grid>
    <Grid item sm={6} xs={12}>
       <Typography className={classes.secondRowSecondItem}>
           Second row second item
       </Typography>
    </Grid>

</Grid>




);


}