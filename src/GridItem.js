import CardActions  from '@material-ui/core/CardActions';
import React              from 'react';
import Card               from '@material-ui/core/Card';
import CardHeader         from '@material-ui/core/CardHeader';
import CardMedia          from '@material-ui/core/CardMedia';
import CardContent        from '@material-ui/core/CardContent';
import { makeStyles }     from '@material-ui/core/styles';
import Typography         from '@material-ui/core/Typography';
import IconButton         from '@material-ui/core/IconButton';
import ArrowForward       from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles(() => ({

cardImage: {
  height: 300

}

}));


export default function GridItem()
{
const classes = useStyles();
return (
<Card>
  <CardHeader 
  title="Excel Masterclass"
  subheader="Recommended for you"
  
  />

  <CardMedia 
   className={classes.cardImage}
   image="https://www.stockvault.net/data/2015/11/15/181050/preview16.jpg"
   title="Excel Masterclass"
  />

  <CardContent>
     <Typography>
       In this course,You'll learn about fullstack development from the basics.You will learn about basics of HTML,CSS,JAVASCRIPT to various frameworks such as Laravel,react etc.
     </Typography>
  </CardContent>
 
  <CardActions>

   <IconButton>
       <ArrowForward />
   </IconButton>

  </CardActions>



</Card>



    );
}