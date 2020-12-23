/**
 * Copyright (c)
 * All rights reserved. developer.martinhwang@gmail.com
 *
 * Filename: CarouselContainer.js
 *
 * Key Options:
 * - retrieve movies data using AJAX from movie API
 *
 * Revision History:
 * - 22 Dec, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 * - 23 Dec, 2020, Martin Hwang: change tranditional styling into material-ui styling 
 */
import React, { Fragment } from 'react'
// material-ui core
import { List, ListItem } from '@material-ui/core'
// material-ui style
import { makeStyles } from '@material-ui/styles'
// material-ui icons
import 
{ Box } from '@material-ui/core'
const useStyles = makeStyles({
    carouselList: {
        height: '250px',
        width: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        paddingBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            // adjust image size of each movie poster
            minWidth: '150px',
            maxWidth: '150px',
            height: '200px',
            backgroundSize: 'cover',
            margin: '5px, 10px',
            cursor: 'pointer',
            transition: '0.5s ease',
            zIndex: '2',
        },
        '& img:hover': {
            transform: 'scale(1.5)',
            zIndex: '5',
        }
    },
})
function CarouselContainer(props) {
    const classes = useStyles()
    let movies = props.movies
    return (
        <Fragment >
            <Box>
                <List className={classes.carouselList}>
                    {movies.map((movie, index) => (
                        <ListItem key={index}>
                            <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`poster of ${movie.poster_path}`}/>
                        </ListItem>
                    ))}  
                </List>
            </Box>
        </Fragment>
    )
}

export default CarouselContainer
