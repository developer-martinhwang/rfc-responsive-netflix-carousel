/* All rights reserved. developer.martinhwang@gmail.com
*
* Filename: Header.js
*
* Key Options:
* - Background image in Header
*
* Revision History:
* - 5 Jan, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
*/
import React, {useState, useEffect} from 'react'
// material-ui core
import { Box } from '@material-ui/core'
// material-ui style
import { makeStyles } from '@material-ui/styles'
// utils
import { randomMovie, turncate } from '../utils/util'
const useStyles = makeStyles({
  
})
function Header(props) {
    const classes = useStyles()
    const [movie, setMovie] = useState('')
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ error, setError ] = useState('')
    useEffect(() => {
        async function getMovie(){
            await fetch(props.fetchUrl)
                .then(res => res.json())
                .then(res => {
                    setIsLoaded(true)
                    let movies = res.results
                    setMovie(movies[randomMovie(movies)])
                })
        }
        try {
            getMovie()
        } catch (error) {
            setIsLoaded(true)
            setError(error)
        }
    }, [props.fetchUrl])
    const backgroundImage = (
        <Box>
        </Box>)
    if (error) {
        return <Box>error: {error.message}</Box>
    }else if (!isLoaded) {
        return <Box>Loading</Box>
    }else {
        return (
            <Box>
               <Box className={classes.background}>
                    <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} />
               </Box>
            </Box>
        )
    }
}

export default Header
