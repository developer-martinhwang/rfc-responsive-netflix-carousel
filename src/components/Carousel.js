import React, { Fragment, useState, useEffect } from 'react'
// material-ui core
import 
{ Box,
  } from '@material-ui/core'
// components
import CarouselBox from './CarouselBox'
import NetflixLogo from '../assets/netflix.png'
function Carousel() {
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
            <Fragment >
                <Box className="netflixLogo">
                    <img src={NetflixLogo} alt="Netflix Logo"/>
                </Box>
                <CarouselBox className="carouselBox" movies={movies}/>
            </Fragment>
        )
    }
}

export default Carousel
