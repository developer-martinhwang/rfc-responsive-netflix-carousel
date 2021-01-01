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
{ Box, Typography
 } from '@material-ui/core'
// material-ui styling
import { makeStyles }  from '@material-ui/styles'
// components
import CarouselList from './CarouselList'

const useStyles = makeStyles({
    carousel: {
        marginTop:'20vh', 
        // height: '150px',
        width: '100%',
        position: 'relative',
    },
    title: {
        paddingLeft:'5vh',
        marginBottom: '-1vh'
    },
    CarouselList:{
        marginTop: '-50px'
    }
})
function Carousel(props) {
    const classes = useStyles()
    const [ movies, setMovies ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ error, setError ] = useState('')
    useEffect(() => {
        try {
            async function getMovies(){
                await fetch(props.fetchUrl)
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
    }, [props.fetchUrl])
    if (error) {
        return <Box>Error: {error.message}</Box>
    } else if (!isLoaded) {
        return <Box>Loading...</Box>
    } else {
        return (
            <Box>
                <Box className={classes.carousel}>
                    <Box className={classes.title}>
                        <Typography  variant="h5">{props.title}</Typography>
                    </Box>
                    <Box className={classes.CarouselList}>
                        <CarouselList movies={movies} title={props.title}/>
                    </Box>
                </Box>
            </Box>
        )
    }
}
export default Carousel
