import React from 'react'
// material-ui core
import { Box } from '@material-ui/core'
// material-ui style
import { makeStyles } from '@material-ui/styles'
// components
import movieRequest from './request'
import Carousel from './carousel/Carousel'
// assets
import NetflixLogo from '../assets/netflix.png'
const useStyles = makeStyles({
    container: {
        marginTop: '30vh',
        height: '150px',
        width: '100%',
    },
    netflixLogo: {
        height: '15vw',
        width: 'auto',
        marginTop:'20vh',
        textAlign: 'center',
        '& img': {
            height: '100%',
        }  
    }
})
function Home() {
    const classes = useStyles()
    return (
        <Box>
            <Box className={classes.netflixLogo}>
                <img src={NetflixLogo} alt="Netflix Logo"/>
            </Box>
            <Box className={classes.container}>
                <Carousel title="Action Movie" fetchUrl={movieRequest.actionMovies} />
            </Box>
            <Box>
                <Carousel title="Drama" fetchUrl={movieRequest.actionMovies} />
            </Box>
        </Box>
    )
}

export default Home
