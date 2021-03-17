import { Container , Link} from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
 import { makeStyles }  from '@material-ui/core/styles';
function Copyright()
{
    return(
     <Typography>
         {"Copyright"}
        <Link href="http://arunroy.com.np/?i=1">
         site made by
       </Link>

       {" " + new Date().getFullYear()}
     </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
footer:{
padding: theme.spacing(6),

bottom: 0

}
  
}));

export default function Footer()
{

    const classes = useStyles();
    return(
     <footer classNmae={classes.footer}>

        <Container>
          <Typography variant="h6">
            Course Nepal
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
              Anyone can get hired.
          </Typography>
         <Copyright />
         
        </Container>



     </footer>

    );
}