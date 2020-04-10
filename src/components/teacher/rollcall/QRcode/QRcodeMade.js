import React, {Component} from 'react'
import {render} from 'react-dom'

import QRCode from 'qrcode.react';
import { Typography, Grid } from '@material-ui/core';


export default function QRcodeMade() {
    const rand = Math.random();
    const test = rand.toString();
    
    return (
        <div>
          <Grid>
{/* 
          <Button
          onClick={handleClick}
          >
        </Button> */}
         
        <Typography>
        <QRCode value ={test} size={500}/>
        </Typography>
            
          </Grid>
      </div>
    )
    }