import React, {Component} from 'react'
import {render} from 'react-dom'

import QRCode from 'qrcode.react';
import { Button, Paper, Typography, Grid } from '@material-ui/core'

export default function qrcode() {
    const rand = Math.random();
    const test = rand.toString();
    // const handleClick = () => {
    //     const rand = Math.random();
        
    // }
    
    return (
        <div>
          <Grid>
{/* 
          <Button
          onClick={handleClick}
          >
        </Button> */}
         
        <Typography>
        <QRCode value ={test}/>
            {test}
        </Typography>
            
          </Grid>
      </div>
    )
    }
  
