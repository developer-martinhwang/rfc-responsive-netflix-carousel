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
import React, { useRef, useEffect } from 'react'
// material-ui core
import { Box,  IconButton, Tooltip } from '@material-ui/core'
import { List, ListItem } from '@material-ui/core'
// material-ui style
import { makeStyles, withStyles } from '@material-ui/styles'
// material-ui icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import InfoIcon from '@material-ui/icons/Info'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'
// util
import { Genre } from '../utils/util'
const useStyles = makeStyles({                                                                                                                                                                              
    carouselList: {
        // to locate <ArrowBackIosIcon /> <List/> <ArrowForwardIosIcon/> 
        // set flex on display
        display: 'flex',
        flexDirection: 'row', 
        // when mouse is hover on carouselList both arrows are showed up
        "&:hover": {
            "& $arrowLeft": {
                color: '#fff'
            },
            "& $arrowRight": {
                color: '#fff'
            }
        }
    },
    list: {
        height: '600px',
        width: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        paddingBottom: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    listItem: {
        /* listItem has <img> and <div>
        *  <div> has icons: 'Add to my list', 'I like it', 'Not for me', 'info'
        */
        display: 'flex',
        flexDirection: 'column',
        background: '#141414',
        borderRadius: '5px',
        padding: '2px',
        '& img': {
            borderRadius: '5px',
            width: '250px',
            height: '450px',
            backgroundSize: 'cover',
            margin: '5px, 5px',
            cursor: 'pointer',
        },
        '& .imgBox': {
            display: 'none',
        },
      
        '&:hover': {
            '& img': {
                minWidth: 'none',
                maxWidth: 'none',
                width: '600px',
                transition: 'width 4s',
            },
            '& .imgBox' : {
                cursor: 'pointer',
                bottom: '80px',
                zIndex: '20',
                position: 'relative',
                display: 'inline-block',
                height: '0',
            }
        }
    },
    iconButton: {
        padding: '5px',
    },
    arrowLeftBox: {
        zIndex: '3',
        position: 'relative',
        left: '20px',
        '& :hover': {
            cursor: 'move',
        }
    },
    arrowLeft: {
        color: '#141414',
        height: '100%',
        width: '30px',
    },
    arrowRightBox: {
        zIndex: '3',
        position: 'relative',
        '& :hover': {
            cursor: 'move',
        }
    },
    arrowRight: {
        color: '#141414',
        height: '100%',
        width: '30px',
        '& :hover': {
            cursor: 'move'
        }
    },
})
const BlackOnWhiteTooltip = withStyles({
    tooltip: {
        color: "#141414",
        backgroundColor: '#fff'
    }
  })(Tooltip);

function CarouselList(props) {
    /* listRef(), moviesRef(), let scrollPerClick, let scrollAmount = 0
    *  carouselScrollLeft() carouselScrollRight() will be moved to CarouselContainer.js components
    *  mouse is hovered in CarouselContainer arrow will be displayed
    * */ 
    const classes = useStyles()
    const movies = props.movies
    // select <List> with useRef()
    const listRef = useRef()
    // select <img> with useRef([]) array
    const moviesRef = useRef([])
    // clientWidth 
    // const [clientWidth, setClientWidth] = useState()
    // const [movieClientWidth, setMovieClientWidth] = useState()
    useEffect(() => {
        const initialCarouselScrollLeft = () => {
            listRef.current.scrollTo({
                top: 0,
                left: 190,
                behavior: 'smooth'
            })
        }
        initialCarouselScrollLeft()
    }, [])
    // moviesPoster is child of <List>
    const moviesPoster = movies.map((movie, index) => (
        <ListItem key={index} className={classes.listItem} onClick={(props)=> {console.log(movie)}} >
            <img ref={el => (moviesRef.current = [...moviesRef.current, el])} src={`http://image.tmdb.org/t/p/w185/${movie?.poster_path}`} alt={`poster of ${movie.poster_path}`}/>
            <Box className="imgBox" color="#fff" display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center" padding="2px">
                    <IconButton color="inherit" className={classes.iconButton} size="small" aria-label="more info" component="span" onClick={(props) => {console.log(props)}}>
                        <BlackOnWhiteTooltip title="Add">
                            <AddCircleIcon/>
                        </BlackOnWhiteTooltip>
                    </IconButton>
                    <IconButton color="inherit" className={classes.iconButton} size="small" aria-label="more info" component="span" onClick={(props) => {console.log(props)}}>
                        <BlackOnWhiteTooltip title="I like it">
                            <ThumbUpAltIcon/>
                        </BlackOnWhiteTooltip>
                    </IconButton>
                    <IconButton color="inherit" className={classes.iconButton} size="small" aria-label="more info" component="span" onClick={(props) => {console.log(props)}}>
                        <BlackOnWhiteTooltip title="Not for me">
                            <ThumbDownAltIcon/>
                        </BlackOnWhiteTooltip>
                    </IconButton>
                    <IconButton color="inherit" className={classes.iconButton} size="small" aria-label="more info" component="span" onClick={(props) => {console.log(props)}}>
                        <BlackOnWhiteTooltip title="Watch & more info">
                            <InfoIcon/>
                        </BlackOnWhiteTooltip>
                    </IconButton>
                </Box>
                <Box display="flex" padding="2px 2px 2px 5px">
                    <Box padding="2px" component="span">{Genre(movie.genre_ids[0])} |</Box> 
                    <Box padding="2px" component="span">{Genre(movie.genre_ids[1])} |</Box>
                    <Box padding="2px" component="span">vote: {movie.vote_average}/10</Box>
                </Box>
            </Box>
        </ListItem>
    ))
    // scroll carousel
    let scrollAmount = 0
    let scrollPerClick = 0
    /* move carousel left side function */
    const carouselScrollLeft = () => {
        console.log('listRef-scrollWidth', listRef.current.scrollWidth)
        console.log('listRef-clientWidth', listRef.current.clientWidth)
        console.log('scrollAmount:',scrollAmount)
        // get clientWidth as soon as render
        // setClientWidth(listRef.current.clientWidth)
        listRef.current.scrollTo({
            top: 0,
            left: (scrollAmount -= scrollPerClick+listRef.current.clientWidth),
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
        // console.log('moviesRef-clientWidth',moviesRef.current[5].clientWidth)
        // console.log('moviesRef-scrollWidth',moviesRef.current[5].scrollWidth)
        /* moviesRef.current[5].clientWidth should be assigned to scrollPerClick 
        *  outside this carouselScrollRight()
        *  it should be fixed
        */
        // scrollPerClick = moviesRef.current[1].clientWidth + 20
        // console.log(scrollPerClick)
        // console.log(listRef)
        if(scrollAmount <= listRef.current.scrollWidth - listRef.current.clientWidth) {
            listRef.current.scrollTo({
                top: 0,
                left: (scrollAmount += scrollPerClick+listRef.current.clientWidth),
                behavior: 'smooth'
            })
        }
       
        console.log('scrollAmount:',scrollAmount)
        // console.log('listRef:', listRef.current)
        // console.log('listRef.current.scrollWidth - listRef.current.clientWidth:',listRef.current.scrollWidth - listRef.current.clientWidth)
    }
  
    return (
        <Box className={classes.carouselList}>
            <Box className={classes.arrowLeftBox} onClick={()=>{carouselScrollLeft()}}>
                <ArrowBackIosIcon  className={classes.arrowLeft} />
            </Box>
            <List ref={listRef} className={classes.list}>
                    {moviesPoster}
            </List>
            <Box className={classes.arrowRightBox} onClick={()=>{carouselScrollRight()}}>
                <ArrowForwardIosIcon className={classes.arrowRight} />
            </Box>
        </Box>
    )
}

export default CarouselList
