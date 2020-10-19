import React from 'react'
import { withWidth, Typography, Hidden, Button } from '@material-ui/core'

const hidden = (props) => {
    return (
        <div>
            <Typography variant="h1¿6" color="initial">
                ancho : {props.width}
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  xs
                </Button>
            </Hidden>


            <Hidden only={['lg','md']}>
                <Button variant="contained" color="primary">
                  lg
                </Button>
            </Hidden>
        </div>
    )
}
export default withWidth()(hidden);