import React, { useContext } from 'react';
import { SmallContext } from './small-context.js';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/* design intentionally sucks so when we improve ui it's universal */

const images = [
    {
      url: './IMG_6903.jpg',
      title: 'Crochet Bee',
      width: '40%',
    },
    {
      url: './knitscarf.jpg',
      title: 'Knit Scarf',
      width: '30%',
    },
    {
      url: './knit-plush.jpg',
      title: 'Knit Plush',
      width: '30%',
    },
    {
        url: './pastel-colors-and-knitting-passion-7-jenny-rainbow.jpg',
        title: 'Create Your Own Pattern',
        width: '30%',
      },
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      fontFamily: 'Slackey, cursive',
      textShadow: '2px 2px #000000',
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  


export default function PatternSelectScreen(){
    const myContext=useContext(SmallContext);
    const classes = useStyles();
    const emptyDiv={
        height:'10px',
        width: '100%',
    };
    // okay cool what do i do with my context now

    // return(<div style={{margin:"10px"}}>
    //     <button onClick={myContext.decideScarf} style={{margin:"10px"}}>Knit Scarf</button>
    //     <button onClick={myContext.decideBee}style={{margin:"10px"}}>Crochet Bee</button>
    //     <button onClick={myContext.decidePlushie} style={{margin:"10px"}}>Knit Plushie</button>
    //     <button disabled style={{margin:"10px"}}>Custom Pattern</button>
    //     <form style={{margin:"10px"}}>
    //         <label for="custom-code"style={{margin:"10px"}}>Got a custom pattern code? Enter it here:</label>
    //         <input type="text" id="custom-code" name="custom-code"></input>
    //         <button style={{margin:"10px"}}>Submit</button>
    //     </form>
    // </div>)

return (
    <div className={classes.root}>
    <Grid container spacing={3}>
        {/* <Grid item xs={6}> */}
        {/* <div style={emptyDiv}>
        </div>  */}
        <Grid item xs={12}>
        </Grid>
        {/* Bee */}
            <ButtonBase
            focusRipple
            key={images[0].title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                 width: images[0].width,
             
            }}
            onClick={() => {myContext.decideBee()}}
            >
            <span
                className={classes.imageSrc}
                style={{
                backgroundImage: `url(${images[0].url})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
                >
                {images[0].title}
                <span className={classes.imageMarked} />
                </Typography>
            </span>
            </ButtonBase>
        {/* </Grid> */}

        {/* <Grid item xs={6}> */}
        {/* Scarf */}
            <ButtonBase
            focusRipple
            key={images[1].title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: images[1].width,
            }}
            onClick={() => {myContext.decideScarf()}}
            >
            <span
                className={classes.imageSrc}
                style={{
                backgroundImage: `url(${images[1].url})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
                >
                {images[1].title}
                <span className={classes.imageMarked} />
                </Typography>
            </span>
            </ButtonBase>
        {/* </Grid> */}

        {/* <Grid item xs={6}> */}
        {/* Knit Plushie */}
            <ButtonBase
            focusRipple
            key={images[2].title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: images[2].width,
            }}
            onClick={() => {myContext.decidePlushie()}}
            >
            <span
                className={classes.imageSrc}
                style={{
                backgroundImage: `url(${images[2].url})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
                >
                {images[2].title}
                <span className={classes.imageMarked} />
                </Typography>
            </span>
            </ButtonBase>
        {/* </Grid> */}

       
        <div style={emptyDiv}>
        </div>

        {/* <Grid item xs={6}> */}
        {/* Custom */}
            <ButtonBase
                focusRipple
                key={images[3].title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: images[3].width,
                }}
                //   onClick={() => {myContext.decidePlushie()}}
                disabled
                >
                <span
                    className={classes.imageSrc}
                    style={{
                    backgroundImage: `url(${images[3].url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                    >
                    {images[3].title}
                    <span className={classes.imageMarked} />
                    </Typography>
                </span>
                </ButtonBase>
        {/* </Grid>   */}

        < Grid item xs={6}>
        </Grid>     
        < Grid item xs={12}>
        <form style={{margin:"10px"}}>
             <label for="custom-code"style={{margin:"10px"}}>Got a custom pattern code? Enter it here:</label>
             <input type="text" id="custom-code" name="custom-code"></input>
            <button style={{margin:"10px"}}>Submit</button>
         </form>
        </Grid>      
    </Grid>
        

    </div>
  );
}
