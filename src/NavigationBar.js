import { Container, Typography, Box, Link}   from '@material-ui/core';
import React           from 'react';
import Toolbar         from '@material-ui/core/Toolbar';
import { makeStyles }   from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({  

siteTitle: {
fontWeight: 'bold',
letterSpacing: 1.5
},
  
  toolbar: {
   display: 'flex',
   flexDirection: 'column',
   [theme.breakpoints.up('md')]:{
     flexDirection: 'row',
  
     justifyContent: 'space-between'
   }
  },

  menuBox: {
   display: "flex",
   flexDirection: "column",
   [theme.breakpoints.up('md')]: {
     flexDirection: 'row'
   }

  },
   menuOption: {
     padding: theme.spacing(1),
     [theme.breakpoints.up('md')]:{
       paddingLeft: theme.spacing(3)
     }
   }
}));
export default function NavigationBar()
{
  const classes = useStyles();
return (
<Container>

  <Toolbar className ={classes.toolbar}>

      <Typography component='h1' variant='h4' className={classes.siteTitle}>
         Course Nepal
      </Typography>

      <Box className={classes.menuBox}>
      {['home', 'courses', 'sign up'].map((menuOption) => (
        <Link
         component='button'
         variant='body1'
         className={classes.menuOption}
        >
         {menuOption.toUpperCase()}
         </Link>
    ))}

      </Box>

  </Toolbar>

</Container>

);


}