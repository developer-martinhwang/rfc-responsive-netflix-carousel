/**
 * Copyright (c)
 * All rights reserved. developer.martinhwang@gmail.com
 *
 * Filename: Home.js
 *
 * Key Options:
 * - 
 *
 * Revision History:
 * - 27 Dec, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 */
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
    carouselContainer: {
        height: '13vh',
        // width: '100%',
    },
    // home:{ 
    //     padding: '5px'
    // },
    netflixLogo: {
        height: '19vw',
        width: 'auto',
        marginTop:'20vh',
        textAlign: 'center',
        '& img': {
            height: '100%',
        },
    },
    '@media screen and (max-width: 1000px)':{
        netflixLogo:{
            '& img': {
                height: '150%'
            }
        },
    },
    '@media screen and (min-height: 850px)':{
        carouselContainer: {
            height: '5vh',
        }
    },
    '@media screen and (max-height: 850px) and (min-height: 550px)':{
        carouselContainer: {
            height: '23vh',
        }
    },
    '@media screen and (max-height: 550px)':{ 
        carouselContainer: {
            height: '50vh',
        }
    }
})
function Home() {
    const classes = useStyles()
    return (
        <Box className={classes.home}>
            <Box className={classes.netflixLogo}>
                <img src={NetflixLogo} alt="Netflix Logo"/>
            </Box>
            <Box className={classes.carouselContainer}>
                <Carousel title="Action Movie" fetchUrl={movieRequest.actionMovies} />
            </Box>
            <Box className={classes.carouselContainer}>
                <Carousel title="Drama" fetchUrl={movieRequest.actionMovies} />
            </Box>
        </Box>
    )
}

export default Home
