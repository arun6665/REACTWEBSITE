import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const useStyles = makeStyles(theme => ({
mainContainer: {
height: 400,
backgroundImage: "url(https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
color: theme.palette.common.white,
backgroundSize: 'cover',
},

mainItem: 
{
  padding: theme.spacing(6),
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

}));

export default function MainGridItem()

{
 const classes =useStyles();
return (
<Grid container className={classes.mainContainer}>
  <Grid item className={classes.mainItem} md={6}> 

    <Typography component='h2' variant='h5'>
      Hello Nepal!!
      <br />
    </Typography>
<br />
    <Typography variant='body1' paragraph>
       Do you want to learn coding,desiging,developing?
     <br />
  

       Smash your carrer by joining us!
    </Typography>
   
   
  </Grid>

</Grid>


);

}