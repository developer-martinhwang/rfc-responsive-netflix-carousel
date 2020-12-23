import React, { Fragment } from 'react'
// material-ui core
import { List, ListItem, Typography} from '@material-ui/core'
import 
{ Box
  } from '@material-ui/core'
function CarouselBox(props) {
    let movies = props.movies
    return (
        <Fragment >
            <List className="carouselList">
                {movies.map((movie, index) => (
                    <ListItem key={index}>
                        <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`poster of ${movie.poster_path}`}/>
                    </ListItem>
                ))}  
            </List>
           
        </Fragment>
    )
}

export default CarouselBox
