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
import React, { useState, useEffect } from 'react'
// material-ui core
import 
{ Box,
  } from '@material-ui/core'
// material-ui styling
import { makeStyles }  from '@material-ui/styles'
// components
import CarouselList from './CarouselList'
// assets
import NetflixLogo from '../assets/netflix.png'


const useStyles = makeStyles({
    container: {
        marginTop: '30vh'
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
    carousel: {
        height: '250px',
        width: '100%',
        position: 'relative',
    }
})
function Carousel() {
    const classes = useStyles()
    const [ movies, setMovies ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ error, setError ] = useState('')
    useEffect(() => {
        const api_key = process.env.REACT_APP_MOVIES_API_KEY
        const url_front = process.env.REACT_APP_MOVIES_URL_FRONT
        const url_last = process.env.REACT_APP_MOVIES_URL_LAST
        const url = `${url_front}${api_key}${url_last}`
        try {
            async function getMovies(){
                fetch(url)
                .then(res => res.json())
                .then(res => {
                    setIsLoaded(true)
                    let movies = res.results
                    setMovies(movies)
                })
            }
            getMovies()
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
                    <CarouselList movies={movies} />
                </Box>
                <Box className={classes.carousel}>
                    <CarouselList movies={movies} />
                </Box>
            </Box>
        )
    }
}
export default Carousel
