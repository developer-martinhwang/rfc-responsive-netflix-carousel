/**
 * Copyright (c)
 * All rights reserved. developer.martinhwang@gmail.com
 *
 * Filename: CarouselContainer.js
 *
 * Key Options:
 * - 
 *
 * Revision History:
 * - 22 Dec, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 * - 23 Dec, 2020, Martin Hwang: change tranditional styling into material-ui styling 
 */
import React from 'react'
// material-ui core
import { Box } from '@material-ui/core'
// material-ui style
import { makeStyles } from '@material-ui/styles'
// components
import CarouselList from './CarouselList'

const useStyles = makeStyles({
    carousel: {
        height: '250px',
        width: '100%',
        position: 'relative',
        "&:hover": {
            "& $arrowLeft": {
                display: 'inline-block'
            },
            "& $arrowRight": {
                display: 'inline-block'
            }
        }
    },
    arrowLeftBox: {
        '& :hover': {
            cursor: 'move'
        }
    },
    arrowLeft: {
        color: '#e50914',
        fontWeight: 'bold',
        height: '100%',
        width: '70px',
        top: '0',
        zIndex: '3',
        position: 'absolute',
        display: 'none',
        left: '5px',
        '& :hover': {
            cursor: 'move'
        }
    },
    arrowRightBox: {
        '& :hover': {
            cursor: 'move'
        }
    },
    arrowRight: {
        color: '#e50914',
        fontWeight: 'bold',
        height: '100%',
        width: '70px',
        top: '0',
        zIndex: '3',
        position: 'absolute',
        display: 'none',
        right: '-12px',
        '& :hover': {
            cursor: 'move'
        }
    }
})
function CarouselContainer(props) {
    const classes = useStyles()
    let movies = props.movies
    return (
        <Box className={classes.carousel}>
            <Box>
                <CarouselList movies={movies}/>
            </Box>
            {/* <Box className={classes.arrowLeftBox} onClick={()=>{alert('clicked')}}>
                <ArrowLeftIcon className={classes.arrowLeft} />
            </Box>
            <Box className={classes.arrowRightBox}>
                <ArrowRightIcon className={classes.arrowRight}/>
            </Box> */}
        </Box>
    )
}

export default CarouselContainer
