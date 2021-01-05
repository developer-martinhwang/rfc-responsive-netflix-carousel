/* All rights reserved. developer.martinhwang@gmail.com
*
* Filename: Navbar.js
*
* Key Options:
* - Navigation bar in Header
*
* Revision History:
* - 5 Jan, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
*/
import React from 'react'
// material-ui core
import { Box } from '@material-ui/core'
// material-ui style
import { makeStyles } from '@material-ui/styles'
// assets
import Logo from '../../assets/net.png'
const useStyles = makeStyles({
    netflixlog: {
        height: '3vw',
        width: 'auto',
        padding: '1vw',
        ' & img': {
            width: '2vw'
        }
    }
})
function Navbar() {
    const classes = useStyles()
    return (
        <Box>
            <Box className={classes.netflixlog}>
                <img src={Logo} alt="Netflix Logo"/>
            </Box>
        </Box>
    )
}

export default Navbar
