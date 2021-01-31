import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



  
    
class AboutUs extends Component{ 
  
  render() {
    const useStyles = makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });
      return (
        <div>
          <h2>About Us</h2>
          <p>Our names are Emily, Sarah, and Ananda and we are the Low Key Influencers! We
            made this project KnitWits as a nod to a hobby all three of us have leaned on during 
            quarantine, crocheting and knitting.
          </p>
          <Card
      style={{
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
      }}
    >
      <CardMedia style={{ height: "300px" }} image={'knitscarf.jpg'} />
    </Card>
          {/* <Card className={useStyles.root}>
          <CardActionArea>
            <CardMedia
              className={useStyles.media}
              image={"./knit-plush.jpg"}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Emily
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}

        {/* <Card className={useStyles.root}>
          <CardActionArea>
            <CardMedia
              className={useStyles.media}
              image="./knit-plush.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Ananda
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={useStyles.root}>
          <CardActionArea>
            <CardMedia
              className={useStyles.media}
              image="./knit-plush.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sarah
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}
       </div>

    );
  }
}
  

  
  
  export default AboutUs;