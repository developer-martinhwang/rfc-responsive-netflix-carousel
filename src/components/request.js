/**
 * Copyright (c)
 * All rights reserved. developer.martinhwang@gmail.com
 *
 * Filename: request.js
 *
 * Key Options:
 * - 
 *
 * Revision History:
 * - 27 Dec, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 */const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY
const MOVIE_DB_BASE_URL = process.env.REACT_APP_MOVIE_DB_BASE_URL
const requests = {
   actionMovies : `${MOVIE_DB_BASE_URL}/discover/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&with_genres=28`
}
export default requests