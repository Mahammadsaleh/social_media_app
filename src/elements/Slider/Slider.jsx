import React from 'react'
import { createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Slider } from '@mui/material';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const useStyles = createTheme({
  root: {
    minWidth: 100,
  },
})

export default function ContinuousSlider({val, setVal}) {
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    setVal(newValue)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <RemoveCircleOutlineOutlinedIcon />
        </Grid>
        <Grid item xs>
          <Slider value={val} 
          onChange={handleChange} 
          min={1}
          max={100}
          aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <AddCircleOutlineOutlinedIcon />
        </Grid>
      </Grid>
    </div>
  )
}