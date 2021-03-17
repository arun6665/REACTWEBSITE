import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles }     from '@material-ui/core/styles';
import MainGridItem       from  './MainGridItem';
import GridItem           from './GridItem';
const useStyles = makeStyles(theme => ({
//reuse a grid item
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
},
thirdRow:
{
    backgroundColor: 'pink'
}

}));

export default function GridLayout() {
 return (
  <Grid container spacing={3}>

    <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
     </Grid>
    
    <Grid item lg={6} md={12} sm={12} xs={12}>
       <GridItem title="FullStack Masterclass"
        image="https://miro.medium.com/max/750/1*-hL6ZeXl_Kt0O-b82UQo9A.png"
        description="In this course you will learn from the basics of HTML,css ,javascript to the advanced frameworks such as react,nodejs,laravel etc.This will help you to be a full stack developer"
       />
     </Grid>
     
    <Grid item lg={6} md={12} sm={12} xs={12}>
       <GridItem title="Learn SEO"
        image="https://statuslabs.com/wp-content/uploads/SEO-Pillar-Post-Art-.png"
        description="Looking for a place to learn SEO? Whether you're a beginner, need advanced on-page tactics, or a refresher on building better traffic, this is best place to learn search engine optimization."
       />

    </Grid>

    <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem title="3D Modeling Masterclass"
         image="http://tumo.org/wp-content/uploads/2017/08/3d.png"
         description="In this online 3D modeling short course, you'll learn how to create realistic props and assets using Maya and Substance Painter. You'll be mentored by an industry expert with years of experience working on blockbuster films and best-selling video games."
       />
    </Grid>

    <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem title="Social Media Management"
        image="https://postcron.com/en/blog/wp-content/uploads/2018/02/socialmedia.png"
        description='This course equips you with critical content creation and management skills. You’ll learn how to create effective social media posts and how to create a strong brand to help you build a social media presence. You’ll also learn how to establish an ongoing process to manage your content.'
     />
    </Grid>

    <Grid item lg={4} md={12} sm={12} xs={12}>
      <GridItem title="Game Development"
      image="https://endiveinfotech.com/wp-content/uploads/2020/10/unity.jpg"
      description="In a quest to understand how video games themselves are implemented, you'll explore the design of such childhood games as: Super Mario Bros., Pong, Flappy Bird, Breakout, Match 3, Legend of Zelda, Angry Birds, Pokémon, 3D Helicopter Game, Dreadhalls, and Portal."
      />
    </Grid>

</Grid>




);


}