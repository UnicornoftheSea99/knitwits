import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";



class AboutUs extends Component{ 
  
  render() {
    
      return (
        <div>
           <Container>
          <h2>About Us</h2>
          <p>Our names are Emily, Sarah, and Ananda and we are the Low Key Influencers! We
            made this project KnitWits as a nod to a hobby all three of us have leaned on during 
            quarantine, crocheting and knitting.
          </p>
          <Grid container>
            <Grid item xs={4}>
            
             <Card
            style={{
              maxWidth: 345,
              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              backgroundColor: "#fafafa",
            }}
          >
            <CardMedia style={{ height: "300px" }} image={'emily.jpg'} />
            <CardContent>
              <Typography component="h3">
                Emily
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Computer Science and French Major 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Smith College '21
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Hobbies: Crocheting Amigurumis!
                </Typography>
            </CardContent>
          </Card>
          </Grid>

          <Grid item xs={4}>
          <Card
            style={{
              maxWidth: 345,
              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              backgroundColor: "#fafafa",
            }}
          >
            <CardMedia style={{ height: "300px" }} image={'ananda.jpg'} />
            <CardContent>
              <Typography component="h3">
                Ananda
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Computer Science and SDS Major
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Smith College '22
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Hobbies: Knitting for Friends!
                </Typography>
            </CardContent>
          </Card>
            </Grid>

            <Grid item xs={4}>
          <Card
            style={{
              maxWidth: 345,
              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              backgroundColor: "#fafafa",
            }}
          >
            <CardMedia style={{ height: "300px"}} image={'sarah.PNG'} />
            <CardContent>
              <Typography component="h3">
                Sarah
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Computer Science and Classics Major
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Smith College '20
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Hobbies: Knitting Complex Math Patterns!
                </Typography>
            </CardContent>
          </Card>
            </Grid>
          </Grid>
          </Container>
       </div>

    );
  }
}
  

  
  
  export default AboutUs;