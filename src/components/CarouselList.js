/**
 * Copyright (c)
 * All rights reserved. developer.martinhwang@gmail.com
 *
 * Filename: CarouselList.js
 *
 * Key Options:
 * - 
 *
 * Revision History:
 * - 23 Dec, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 * - 24 Dec, 2020, Martin Hwang: implemented functions which scroll carousel to left and right side 
 */
import React, { useRef } from 'react'
// material-ui core
import { Box } from '@material-ui/core'
import { List, ListItem } from '@material-ui/core'
// material-ui style
import { makeStyles } from '@material-ui/styles'
// material-ui icons
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
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
        // display: 'none',
        display: 'inline-block',
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
        // display: 'none',
        display: 'inline-block',
        right: '-12px',
        '& :hover': {
            cursor: 'move'
        }
    }
})
function CarouselList(props) {
    /* listRef(), moviesRef(), let scrollPerClick, let scrollAmount = 0
    *  carouselScrollLeft() carouselScrollRight() will be moved to CarouselContainer.js components
    *  mouse is hovered in CarouselContainer arrow will be displayed
    * */ 
    const classes = useStyles()
    // select <List> with useRef()
    const listRef = useRef()
    // select <img> with useRef([]) array
    const moviesRef = useRef([])
    const movies = props.movies
    // moviesPoster is child of <List>
    const moviesPoster = movies.map((movie, index) => (
        <ListItem key={index}>
            <img ref={el => (moviesRef.current = [...moviesRef.current, el])} src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`poster of ${movie.poster_path}`}/>
        </ListItem>
    ))
    let scrollPerClick
    let scrollAmount = 0
    /* move carousel left side function */
    const carouselScrollLeft = () => {
        listRef.current.scrollTo({
            top: 0,
            left: (scrollAmount -= scrollPerClick),
            behavior: 'smooth'
        })
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
    }
    // move carousel right side function
    const carouselScrollRight = () => {
        console.log('listRef-scrollWidth', listRef.current.scrollWidth)
        console.log('listRef-clientWidth', listRef.current.clientWidth)
        console.log('moviesRef-clientWidth',moviesRef.current[5].clientWidth)
        console.log('moviesRef-scrollWidth',moviesRef.current[5].scrollWidth)
        /* moviesRef.current[5].clientWidth should be assigned to scrollPerClick 
        *  outside this carouselScrollRight()
        *  it should be fixed
        */
        scrollPerClick = moviesRef.current[1].clientWidth
        console.log(scrollPerClick)
        console.log(listRef)
        if(scrollAmount <= listRef.current.scrollWidth - listRef.current.clientWidth) {
            listRef.current.scrollTo({
                top: 0,
                left: (scrollAmount += scrollPerClick),
                behavior: 'smooth'
            })
        }
    }
    return (
        <Box>
             <List ref={listRef} className={classes.carouselList}>
                    {moviesPoster}
            </List>
            <Box className={classes.arrowLeftBox} onClick={()=>{carouselScrollLeft()}}>
                <ArrowLeftIcon className={classes.arrowLeft} />
            </Box>
            <Box className={classes.arrowRightBox} onClick={()=>{carouselScrollRight()}}>
                <ArrowRightIcon className={classes.arrowRight} />
            </Box>
        </Box>
    )
}

export default CarouselList
