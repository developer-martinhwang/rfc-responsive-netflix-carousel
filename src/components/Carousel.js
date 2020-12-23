/**
 * Copyright (c)
 * All rights reserved. developer.martinhwang@gmail.com
 *
 * Filename: Carousel.js
 *
 * Key Options:
 * - retrieve movies data using AJAX from movie API
 *
 * Revision History:
 * - 22 Dec, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 * - 23 Dec, 2020, Martin Hwang: change tranditional styling into material-ui styling 
 */
import React, { Fragment, useState, useEffect } from 'react'
// material-ui core
import 
{ Box,
  } from '@material-ui/core'
// material-ui styling
import { makeStyles }  from '@material-ui/styles'
// components
import CarouselContainer from './CarouselContainer'
// assets
import NetflixLogo from '../assets/netflix.png'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
const useStyles = makeStyles({
    container: {
        marginTop: '30vh'
    },
    carousel: {
        height: '250px',
        width: '100%',
        position: 'relative',
        '& .arrow': {
            color: 'red',
            fontWeight: 'bold',
            height: '100%',
            width: '45px',
            lineHeight: '250px',
            fontSize: '25px',
            textAlign: 'center',
            top: '0',
            zIndex: '3',
            position: 'absolute',
            // display: 'none'
        },
        '& .arrow:hover': {
            cursor: 'move'
        },
        '& .arrowLeft': {
            left: '12px'
        },
        '& .arrowRight': {
            right: '-12px'
        },
    },
    netflixLogo: {
        height: '15vw',
        width: 'auto',
        marginBottom: '10vh',
        textAlign: 'center',
        '& img': {
            height: '100%',
        }  
    },
})
function Carousel() {
    const classes = useStyles()
    const [ movies, setMovies ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ error, setError ] = useState('')
    useEffect(() => {
        try {
            const api_key = process.env.REACT_APP_MOVIES_API_KEY
            const url_front = process.env.REACT_APP_MOVIES_URL_FRONT
            const url_last = process.env.REACT_APP_MOVIES_URL_LAST
            const url = `${url_front}${api_key}${url_last}`
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setIsLoaded(true)
                    let movies = res.results
                    setMovies(movies)
                })
        } catch (err) {
            setIsLoaded(true)
            setError(err)
        }
        /* without [] setMovieData(movies) is set continually and 
         * send variable to child component as props unceasingly in useEffect()
        */  
    }, [])
    if (error) {
        return <Box>Error: {error.message}</Box>
    } else if (!isLoaded) {
        return <Box>Loading...</Box>
    } else {
        return (
            <Box className={classes.container}>
                <Box className={classes.netflixLogo}>
                    <img src={NetflixLogo} alt="Netflix Logo"/>
                </Box>
                <Box className={classes.carousel}>
                    <CarouselContainer movies={movies}/>
                    <Box>
                        <ArrowBackIosIcon className="arrow arrowLeft"/>
                    </Box>
                    <Box>
                        <ArrowForwardIosIcon className="arrow arrowRight"/>
                    </Box>
                </Box>
            </Box>
        )
    }
}
export default Carousel
